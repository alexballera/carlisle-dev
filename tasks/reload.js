import gulp from 'gulp'
import browserSync from 'browser-sync'

gulp.watch([
  './src/**/*.html',
  './src/**/*.scss',
  './src/main.js',
  './src/header/*.js',
  './src/homepage/*.js',
  './src/footer/*.js'
]).on('change', browserSync.reload)
