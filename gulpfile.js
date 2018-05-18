var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	clean = require('gulp-clean-css'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync');


gulp.task('styl', function() {
	return gulp.src('app/stylus/*.styl')
		.pipe(stylus())
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(clean())
		.pipe(browserSync.reload({stream: true}))
		.pipe(gulp.dest('app/css'))
});

gulp.task('browserSync', function() {
	browserSync({
        server: {baseDir: 'app'},
        notify: false
    });
});

gulp.task('watch', ['browserSync', 'styl'], function() {
    gulp.watch('app/stylus/*.styl', ['styl']);
});

gulp.task('default', [ 'styl']);
