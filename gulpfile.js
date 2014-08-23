var gulp = require('gulp');
var connect = require('gulp-connect');
gulp.task('default', function () {
  return connect.server({
    root: '',
    port: 9003,
    livereload: true
  });
});