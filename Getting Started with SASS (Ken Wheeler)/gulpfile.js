var gulp = require('gulp');
var sass = require('gulp-sass');

var scssRootFolder = 'app/scss/**/*.scss';
var cssDistFolder = 'dist/css';

gulp.task('sass', function () {
    return gulp.src(scssRootFolder)
        .pipe(sass())
        .pipe(gulp.dest(cssDistFolder));
});

gulp.task('watch', function () {
    gulp.watch(scssRootFolder, ['sass']);
});

gulp.task('default', ['sass']);