var gulp = require("gulp");
var tsc = require("gulp-typescript");

var tsSettings = tsc.createProject('tsconfig.json');

gulp.task('tsc', function(){
    return gulp.src([
        'source/**/*.ts',
        'source/**/*.d.ts'
    ])
    .pipe(tsc(tsSettings))
    .js.pipe(gulp.dest('dist'));
});

gulp.task('default', ['tsc'], function(){

});