const gulp = require('gulp');
const clean = require('gulp-clean');

module.exports = () => {
  return gulp.src('www')
    .pipe(clean());
}
