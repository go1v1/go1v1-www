import autoprefixer from 'gulp-autoprefixer'
import babelify from 'babelify'
import browserify from 'browserify'
import browserSync from 'browser-sync'
import dotenv from 'dotenv'
import exorcist from 'exorcist'
import gulp from 'gulp'
import gutil from 'gulp-util'
import history from 'connect-history-api-fallback'
import rename from 'gulp-rename'
import replace from 'gulp-replace'
import sass from 'gulp-sass'
import source from 'vinyl-source-stream'
import watchify from 'watchify'
import { spawn } from 'child_process'

const sync = browserSync.create()

watchify.args.debug = true

const bundler = watchify(
  browserify('./src/index.js', watchify.args)
  .transform(babelify.configure({
    sourceMapRelative: process.cwd(),
    externalHelpers: true,
    optional: ['es7.decorators', 'es7.functionBind']
  }))
)
bundler.on('update', bundle)

function bundle() {
  return bundler
    .bundle()
    .on('error',(err) => {
      gutil.log(err.message)
      sync.notify("Browserify Error!")
      this.emit("end")
    })
    .pipe(exorcist('./dist/app.js.map'))
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(sync.stream({ once: true }))
}

gulp.task('set-env:production', () => {
  dotenv.load({ path: '.env.production' })
})

gulp.task('styles', () => {
  gulp.src('./styles/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(sync.stream())
})

gulp.task('markup', () => {
  gulp.src('./markup/*.html')
    .pipe(replace('${baseUrl}', process.env.GO1V1_BASEURL || '/'))
    .pipe(gulp.dest('./dist'))
    .pipe(sync.stream())
})

gulp.task('scripts', () => {
  bundle()
})

gulp.task('build', ['styles', 'markup', 'scripts'])

gulp.task('dev', ['build'], () => {
  sync.init({
    ghostMode: false,
    open: false,
    server: {
      baseDir: './dist',
      middleware: [ history() ]
    }
  })

  gulp.watch('./styles/{,*/}*.scss', ['styles'])
  gulp.watch('./markup/*.html', ['markup'])
})

gulp.task('deploy', ['set-env:production', 'build'], (done) => {
  spawn('git', 'subtree push --prefix dist origin gh-pages'.split(' '), {
    stdio: ['ignore', process.stdout, process.stderr]
  }, done)
})

gulp.task('default', ['dev'])
