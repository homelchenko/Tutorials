var gulp = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('jshint', function () {
    return gulp.src('source/javascript/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});
       
gulp.task('watch', function () {
    gulp.watch('sources/javascript/**/*.js', ['jshint']);
});

gulp.task('default', ['watch']);