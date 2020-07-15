'use strict'
var gulp = require('gulp');
var browserSync = require('browser-sync').create();// livereload


 gulp.task('html', function() {
  return gulp.src('src/**/index.html')
  .pipe(gulp.dest('./build'))
  .pipe(browserSync.reload({
   stream: true
  }))
 });


 gulp.task('default', function () {
 browserSync.init({
      server: {
        baseDir: 'build'
      },
      notify: false,
      open: true,
      ui: false
    }),

gulp.watch("src/**/index.html",  gulp.parallel('html'));
//gulp.watch("src/**/*.css",  gulp.parallel('css'));
//gulp.watch("src/**/*.js",  gulp.parallel('js'));
  // gulp.watch("src/*.html", ["html"]).on("change", browserSync.reload);
  // gulp.watch("src/*.html", ["html"]).on("change", browserSync.reload);
  // gulp.watch("src/**/*.{sass,scss}", ["sass"]).on('change', browserSync.reload);
});
