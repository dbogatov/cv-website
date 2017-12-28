/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    rename = require('gulp-rename'),
    uglify = require("gulp-uglify"),
    headerfooter = require('gulp-headerfooter'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

var paths = {
    webroot: "./wwwroot/",
    master: "./master/*",
    header: "./master/header.html",
    footer: "./master/footer.html",
    pages: "./pages/*",
    saas: "./scss/style.scss",
};

paths.htmlOut = paths.webroot + "*.html";
paths.sassOut = paths.webroot + "assets/custom/css/";

paths.js = paths.webroot + "assets/custom/js/*";

//Watch task
gulp.task("watch", function() {
    gulp.watch(paths.pages, ["default"]);
    gulp.watch(paths.master, ["default"]);
    gulp.watch(paths.js, ["default"]);
});

gulp.task("default", ["gen-html", "gen-css"]);

gulp.task("gen-html", ["clean"], function() {
    gulp.src(paths.pages)
        .pipe(headerfooter.header(paths.header))
        .pipe(headerfooter.footer(paths.footer))
        .pipe(gulp.dest(paths.webroot));
});

gulp.task("clean", ["clean:html"]);

gulp.task("clean:html", function(cb) {
    rimraf(paths.htmlOut, cb);
});


gulp.task("gen-css", function() {
    gulp
        .src(paths.saas)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('style.css'))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(paths.sassOut));
});
