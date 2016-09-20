const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const concat = require('gulp-concat');

module.exports = () => {
  return sass('source/file.scss')
    .on('error', sass.logError)
    .pipe(concat('aplication.all.css'))
    .pipe(gulp.dest('www'))
}
