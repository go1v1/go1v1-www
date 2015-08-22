'use strict'

var browserify = require('browserify')
  , browserSync = require('browser-sync').create()
  , exorcist = require('exorcist')
  , gulp = require('gulp')
  , gutil = require('gulp-util')
  , sass = require('gulp-sass')
  , source = require('vinyl-source-stream')
  , watchify = require('watchify')

watchify.args.debug = true

var bundler = watchify(browserify('./src/index.js', watchify.args))
bundler.on('update', bundle)

function bundle() {
  return bundler.bundle()
    .on('error', function (err) {
      gutil.log(err.message)
      browserSync.notify("Browserify Error!")
      this.emit("end")
    })
    .pipe(exorcist('./dist/app.js.map'))
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream({ once: true }))
}

gulp.task('styles', function() {
  return gulp.src('./styles/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream())
})

gulp.task('markup', function() {
  return gulp.src('./markup/*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream())
})

gulp.task('scripts', function() {
  return bundle()
})

gulp.task('dev', ['styles', 'markup', 'scripts'], function() {
  browserSync.init({
    server: './dist'
  })

  gulp.watch('./styles/{,*/}*.scss', ['styles'])
  gulp.watch('./markup/*.html', ['markup'])
})

gulp.task('default', ['dev'])
