/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    rename = require('gulp-rename'),
    less = require('gulp-less'),
    uglify = require("gulp-uglify"),
	headerfooter = require('gulp-headerfooter'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps');

var paths = {
    webroot: "./wwwroot/",
	header: "./master/header.html",
	footer: "./master/footer.html",
	pages: "./pages/*",
	saas: "./scss/style.scss"
};

paths.htmlOut = paths.webroot + "*.html";
paths.sassOut = paths.webroot + "assets/custom/css/";

// paths.js = paths.webroot + "js/**/*.js";
// paths.minJs = paths.webroot + "js/**/*.min.js";
// paths.less = paths.webroot + "css/less/**/*.less";
// paths.lessOut = paths.webroot + "css/";
// paths.css = paths.webroot + "css/**/*.css";
// paths.minCss = paths.webroot + "css/**/*.min.css";
// paths.concatJsDest = paths.webroot + "js/site.min.js";
// paths.concatCssDest = paths.webroot + "css/site.min.css";
// paths.cssDest = paths.webroot + "css/min";

// gulp.task("clean:js", function (cb) {
//     rimraf(paths.concatJsDest, cb);
// });

// gulp.task("clean:css", function (cb) {
//     rimraf(paths.cssDest, cb);
// });

// gulp.task("min:js", function () {
//     return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
//         .pipe(concat(paths.concatJsDest))
//         .pipe(uglify())
//         .pipe(gulp.dest("."));
// });

// gulp.task("min:css", ["build-less"], function () {
//     return gulp.src([paths.css, "!" + paths.minCss])
//         .pipe(cssmin())
//         .pipe(rename({
//             suffix: '.min'
//         }))
//         .pipe(gulp.dest(paths.cssDest));
// });

// // Compiles LESS > CSS 
// gulp.task('build-less', function () {
//     return gulp.src(paths.less)
//         .pipe(less())
//         .pipe(gulp.dest(paths.lessOut));
// });

// gulp.task("min", ["min:js", "min:css"]);

gulp.task("default", ["gen-html", "gen-css"]);

gulp.task("gen-html", ["clean"], function () {
    gulp.src(paths.pages)
        .pipe(headerfooter.header(paths.header))
        .pipe(headerfooter.footer(paths.footer))
        .pipe(gulp.dest(paths.webroot));
});

gulp.task("clean", ["clean:html"]);

gulp.task("clean:html", function (cb) {
    rimraf(paths.htmlOut, cb);
});


gulp.task("gen-css", function () {
	gulp
		.src(paths.saas)
		.pipe(sourcemaps.init())	
        .pipe(sass().on('error', sass.logError))
		.pipe(rename('style.css'))
		.pipe(sourcemaps.write("."))
        .pipe(gulp.dest(paths.sassOut));
});