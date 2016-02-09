// Gulp Dependencies
var gulp = require('gulp');

// Build Dependencies
var browserify = require('browserify');

var transform = require('vinyl-transform');

var source = require('vinyl-source-stream');

// Development Dependencies
var jshint = require('gulp-jshint');

// Test Dependencies
var mochaPhantomjs = require('gulp-mocha-phantomjs');

gulp.task('lint-client', function() {
	//return gulp.src('./app/**/*.js')
	return gulp.src('./app/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('lint-test', function() {
	return gulp.src('./test/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
	return gulp.src('test/index.html')
		.pipe(mochaPhantomjs());
});

//http://atendesigngroup.com/blog/gulp-browserify-and-error-handling
gulp.task('browserify-client', ['lint-client'], function() {
	return browserify('./app/index.js')
		.bundle()
		.pipe(source('times-tables-generator.js'))
		.pipe(gulp.dest('build'));
});

gulp.task('browserify-test', ['lint-test'], function() {
	return browserify('./test/mocha-main.js')
		.bundle()
		.pipe(source('times-tables-generator-test.js'))
		.pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
	gulp.watch('app/**/*.js', ['browserify-client', 'test']);
	gulp.watch('test/**/*.js', ['test']);
});

gulp.task('test', ['lint-test', 'browserify-test'], function() {
	return gulp.src('test/index.html')
		.pipe(mochaPhantomjs());
});