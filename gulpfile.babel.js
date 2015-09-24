import autoprefixer from 'gulp-autoprefixer'
import babelify from 'babelify'
import browserify from 'browserify'
import browserSync from 'browser-sync'
import exorcist from 'exorcist'
import gulp from 'gulp'
import gutil from 'gulp-util'
import history from 'connect-history-api-fallback'
import rename from 'gulp-rename'
import sass from 'gulp-sass'
import source from 'vinyl-source-stream'
import watchify from 'watchify'

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
    .pipe(gulp.dest('./dist'))
    .pipe(sync.stream())
})

gulp.task('scripts', () => {
  bundle()
})

gulp.task('dev', ['styles', 'markup', 'scripts'], () => {
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

gulp.task('default', ['dev'])
