import gulp from 'gulp'
import browserSync from 'browser-sync'

gulp.watch([
  './src/**/*.html',
  './src/**/*.scss',
  './src/main.js',
  './src/homepage/**/*.js',
  './src/about/**/*.js',
  './src/components/**/*.js',
  './src/data/**/*.js',
  './src/lib/**/*.js'
]).on('change', browserSync.reload)
