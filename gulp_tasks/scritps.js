const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

module.exports = () => {
  const source = [
    'source/app.3dparty.js',
    'source/app.common.js',
    'source/app.features.js',
    'source/app.starter.js',

    'source/**/*.module.js',
    'source/**/*.controller.js'
  ];

  return gulp.src(source)
      .pipe(sourcemaps.init())
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('aplication.all.js'))
      .pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('www'));
}
