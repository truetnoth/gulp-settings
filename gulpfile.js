var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	clean = require('gulp-clean-css'),
	autoprefixer = require('gulp-autoprefixer');


gulp.task('styl', function() {
	return gulp.src('app/stylus/*.styl')
		.pipe(stylus())
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(clean())
		.pipe(gulp.dest('app/css'))
});

gulp.task('watch', function() {
    gulp.watch('app/stylus/*.styl', ['styl']);
});

gulp.task('default', [ 'styl']);
