var gulp        = require("gulp"),
    browserify  = require("browserify"),
    source      = require("vinyl-source-stream"),
    buffer      = require("vinyl-buffer"),
    tslint      = require("gulp-tslint"),
    tsc         = require("gulp-typescript"),
    sourcemaps  = require("gulp-sourcemaps"),
    uglify      = require("gulp-uglify"),
    runSequence = require("run-sequence"),
    mocha       = require("gulp-mocha"),
    istanbul    = require("gulp-istanbul"),
    browserSync = require("browser-sync");

gulp.task("lint", function(){
    return gulp.src([
        "source/**/*.ts",
        "test/**/*.test.ts"
    ])
    .pipe(tslint({ }))
    .pipe(tslint.report("verbose"));
});