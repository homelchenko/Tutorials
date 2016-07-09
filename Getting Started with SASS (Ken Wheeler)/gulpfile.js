var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// Source constants
var scssRootFolder = 'app/scss/**/*.scss';
var htmlRootFolder = 'app/**/*.html';

// Destination contansts
var distRootFolder = 'dist';
var cssDistFolder = 'dist/css';

gulp.task('sass', function () {
    return gulp.src(scssRootFolder)
        .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest(cssDistFolder));
});

gulp.task('copy', function () {
    return gulp.src(htmlRootFolder)
        .pipe(gulp.dest(distRootFolder))
});

gulp.task('watch', function () {
    gulp.watch(scssRootFolder, ['sass']);
});

gulp.task('default', ['sass', 'copy']);