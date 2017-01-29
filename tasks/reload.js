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
  './src/why/**/*.js',
  './src/differences/**/*.js',
  './src/community/**/*.js',
  './src/navigation/**/*.js',
  './src/team/**/*.js',
  './src/careers/**/*.js',
  './src/contact/**/*.js',
  './src/services/**/*.js'
]).on('change', browserSync.reload)
