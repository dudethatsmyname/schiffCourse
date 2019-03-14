var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });

});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
//so styles is a dependency runds first so we can have the src file(which is completed by styles task) to run this new inject func which auto injects css to browser

// gulp.task('cssInject', ['styles'], function(){
// 	return gulp.src('./app/temp/styles/styles.css')
// 	.pipe(browserSync.stream());
// });

//ok so no errors but nothing happening to webpage what am i missing .. maybe worng src loci or dest or soemthin g in gulp file not working...