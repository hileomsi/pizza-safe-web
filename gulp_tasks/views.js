const gulp = require('gulp');
const pug = require('gulp-pug');
const htmlmin = require('gulp-htmlmin');
const flatten = require('gulp-flatten');

module.exports = () => {
  return gulp.src('source/**/*.pug')
    .pipe(pug())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(flatten())
    .pipe(gulp.dest('www'));
}
