const gulp = require('gulp');
const inject = require('gulp-inject');

module.exports = () => {
  let source = gulp.src(['www/**/*.js', 'www/**/*.css'], {read: false});

  gulp.src('www/index.html')
    .pipe(inject(source, { ignorePath: '/www/' }))
    .pipe(gulp.dest('www'));
}
