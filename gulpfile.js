'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssTimeStamp = require('gulp-timestamp-css-url');
var imagemin = require('gulp-imagemin');

gulp.task('sass', function () {
	return gulp.src('./*.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(cssTimeStamp({useDate:true}))
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest('./'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./styles/**/*.scss', ['sass']);
});

gulp.task('image', function() {
	gulp.src('./images_src_3/**/*')
		.pipe(imagemin([
			imagemin.jpegtran({progressive: true}),
			imagemin.optipng({optimizationLevel: 7})
		]))
		.pipe(gulp.dest('./images'))
});