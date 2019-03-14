var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .on('error',function(e) {
    	console.log(e.toString());
    	this.emit('end');

    })
    .pipe(gulp.dest('./app/temp/styles'));
});

//handling errors allowing emit to end enables watch to get a completed message and continue on without stopping and the c log gives us some info
//this seems better than the default way jonas was using with sass and npm run watch script