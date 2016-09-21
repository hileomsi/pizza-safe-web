const gulp = require('gulp');
const runSequence = require('run-sequence');

module.exports = () => {
  return runSequence('clean', ['bower','imgs','styles','scripts','views'], 'inject');
}
