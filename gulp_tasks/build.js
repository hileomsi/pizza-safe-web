const gulp = require('gulp');
const runSequence = require('run-sequence');

module.exports = () => {
  return runSequence('clean', ['bower','styles','scripts','views'], 'inject');
}
