const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require("browser-sync");

const clean = require('./gulp_tasks/clean');
const inject = require('./gulp_tasks/inject');
const bower = require('./gulp_tasks/bower');
const scripts = require('./gulp_tasks/scritps');
const styles = require('./gulp_tasks/styles');
const views = require('./gulp_tasks/views');
const build = require('./gulp_tasks/build');

gulp.task('clean', clean);
gulp.task('inject', inject);
gulp.task('bower', bower);
gulp.task('scripts', scripts);
gulp.task('styles', styles);
gulp.task('views', views);
gulp.task('build', build);

gulp.task('serve', ['build'], () => {
  const browser =  browserSync.init({
        server: { baseDir: "./www" }
    });

  gulp.watch("source/**/*", ['build', browserSync.reload]);
  gulp.watch("bower_components/**/*", ['build',  browserSync.reload]);
})
