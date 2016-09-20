const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

module.exports = () => {
  return gulp.src('source/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('aplication.all.js'))
      .pipe(uglify())
      .pipe(sourcemaps.write('../maps'))
      .pipe(gulp.dest('www'));
}
