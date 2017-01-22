import gulp from 'gulp'
import browserSync from 'browser-sync'

gulp.watch([
  './src/**/*.html',
  './src/**/*.scss',
  './src/main.js',
  './src/navbar/*.js',
  './src/homepage/**/*.js',
  './src/footer/*.js',
  './src/components/**/*.js'
]).on('change', browserSync.reload)
