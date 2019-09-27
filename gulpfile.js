const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const run = require('gulp-run');

function watch() {
	browserSync.init({
		server: {
			baseDir: './'
		},

	});
	gulp.watch('./source/css/**/*.css').on('change', browserSync.reload);
	gulp.watch('./source/js/**/*.js').on('change', browserSync.reload);
	gulp.watch('./*.html').on('change', browserSync.reload);
}

gulp.task('watch', watch);