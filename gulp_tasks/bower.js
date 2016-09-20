const gulp = require('gulp');
const mainBowerFiles = require('gulp-main-bower-files');

module.exports = () => {
  return gulp.src('./bower.json')
   .pipe(mainBowerFiles())
   .pipe(gulp.dest('www/libs'));
}
