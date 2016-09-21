const gulp = require('gulp');
const flatten = require('gulp-flatten');

module.exports = () => {
  return gulp.src('source/asserts/imgs/**/*')
    .pipe(flatten())
    .pipe(gulp.dest('www/imgs/'));
};
