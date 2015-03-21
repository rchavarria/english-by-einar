/*global process, require, console */
(function () {
    'use strict';

    var gulp = require('gulp'),
        gutil = require('gulp-util'),
        sass = require('gulp-sass'),
        minifyCss = require('gulp-minify-css'),
        rename = require('gulp-rename'),
        jslint = require('gulp-jslint'),
        karma = require('karma').server,

        bower = require('bower'),
        sh = require('shelljs'),

        paths = {
            sass: ['./scss/**/*.scss']
        };

    gulp.task('default', ['sass']);

    gulp.task('sass', function (done) {
        gulp.src('./scss/ionic.app.scss')
            .pipe(sass())
            .pipe(gulp.dest('./www/css/'))
            .pipe(minifyCss({
                keepSpecialComments: 0
            }))
            .pipe(rename({ extname: '.min.css' }))
            .pipe(gulp.dest('./www/css/'))
            .on('end', done);
    });

    gulp.task('watch', function () {
        gulp.watch(paths.sass, ['sass']);
    });

    gulp.task('install', ['git-check'], function () {
        return bower.commands.install()
            .on('log', function (data) {
                gutil.log('bower', gutil.colors.cyan(data.id), data.message);
            });
    });

    gulp.task('git-check', function (done) {
        if (!sh.which('git')) {
            console.log(
                '  ' + gutil.colors.red('Git is not installed.'),
                '\n  Git, the version control system, is required to download Ionic.',
                '\n  Download git here:',
                gutil.colors.cyan('http://git-scm.com/downloads') + '.',
                '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
            );
            process.exit(1);
        }
        done();
    });

    gulp.task('jslint', function () {
        return gulp
            .src(['gulpfile.js', '!www/js/init_libraries.js', 'www/js/**/*.js', 'test/js/**/*.js'])
            .pipe(jslint({
                global: ['console', 'module', 'require', 'describe', 'it', 'expect', 'angular']
            }))
            .pipe(jslint());
    });

    /*jslint nomen: true*/
    /*global __dirname*/
    gulp.task('test', ['jslint'], function (done) {
        karma.start({
            configFile: __dirname + '/karma.conf.js'
        }, done);
    });

    gulp.task('test-no-lint', function (done) {
        karma.start({
            configFile: __dirname + '/karma.conf.js'
        }, done);
    });
    /*jslint nomen: false*/

}());

