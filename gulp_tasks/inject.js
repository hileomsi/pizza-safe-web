const gulp = require('gulp');
const inject = require('gulp-inject');

module.exports = () => {
  let presource = gulp.src(['www/libs/angular/angular.js', 'www/libs/jquery/dist/jquery.js'], {read: false});
  // let source = gulp.src(['www/**/*.js', 'www/**/*.css'], {read: false});
  let source = gulp.src(['www/libs/!(angular|jquery)/**/*', 'www/*.js', 'www/**/*.css'], {read: false});

  gulp.src('www/index.html')
    .pipe(inject(presource, {starttag: '<!-- inject:pre:{{ext}} -->', ignorePath: '/www/'}))
    .pipe(inject(source, { ignorePath: '/www/' }))
    .pipe(gulp.dest('www'));
}
