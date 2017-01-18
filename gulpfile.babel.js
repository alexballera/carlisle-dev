import gulp from 'gulp'
require('require-dir')('./tasks')

/* Instalar las siguientes dependencias:
npm i -S pug yo-yo page empty-element moment intl intl-relativeformat superagent axios multer file-extension
npm i -D sass-lint gulp-sass-lint gulp babel-preset-latest babelify browser-sync browserify del gulp-autoprefixer gulp-cache gulp-cssnano gulp-gh-pages gulp-htmlmin gulp-imagemin gulp-inject gulp-notify gulp-plumber gulp-rename gulp-sass gulp-sass-glob gulp-uglify gulp-uncss imagemin-jpegtran imagemin-optipng imagemin-pngquant imagemin-svgo jquery require-dir vinyl-buffer vinyl-source-stream babel-plugin-transform-regenerator

*/
// Build
gulp.task('build', ['copy', 'inject'], () => {
  // gulp.start('styles', 'scripts', 'images')
  gulp.start('build:html', 'styles', 'scripts', 'images')
})

// Default
gulp.task('default', ['clean'], () => {
  gulp.start('serve', 'watch', 'build')
  // gulp.start('watch', 'build')
})
