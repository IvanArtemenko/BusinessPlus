const gulp = require('gulp');
const nib = require('nib');
const stylus = require('gulp-stylus');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const bootstrap = require('bootstrap-styl');
const pug = require('gulp-pug', 'pug');

gulp.task('stylus', function () {
    return gulp
        .src('./source/styles/main.styl')
        .pipe(plumber())
        .pipe( stylus({
            compress: true,
            use: [nib(), bootstrap()]
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./source/static/css/'));
});

gulp.task('pug', function() {
    return gulp
        .src('./source/pug/pages/*.pug')
        .pipe( pug({
            pretty: true
        }))
        .pipe( gulp.dest('./'));
});

gulp.task('watch', function () {
    gulp.watch('./source/**/*.styl', ['stylus']);
    gulp.watch('./source/**/*.pug', ['pug']);
});

gulp.task('default', ['watch', 'stylus', 'pug']);