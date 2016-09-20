const gulp = require('gulp');
const pug = require('gulp-pug');
const htmlmin = require('gulp-htmlmin');

module.exports = () => {
  return gulp.src('source/**/*.pug')
    .pipe(pug())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('www'));
}
