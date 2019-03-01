'use strict';

var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');
var csso = require('gulp-csso');
var gulp = require('gulp');
var del = require('del');


// Gulp task to minify CSS files
gulp.task('styles', function () {
    return gulp.src('./css/*.css')
        // Concat every css file
        .pipe(concatCss('styles.css'))
        // Auto-prefix css styles for cross browser compatibility
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        // Minify the file
        .pipe(csso())
        // Output
        .pipe(gulp.dest('./dist/css'))
});


// Clean output directory
gulp.task('clean', function () {
   del(['dist/css/*.*'])
});


// Gulp task to minify all files
gulp.task('default', gulp.parallel('clean', 'styles'));