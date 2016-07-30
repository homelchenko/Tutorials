var gulp = require('gulp');
var tsc = require('gulp-typescript');
var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');
var open = require('open');
var del = require('del');

var PATHS = {
    src: 'src/**/*.ts',
    html: 'src/**/*.html',
    dist: 'dist',
};

gulp.task('clean', function (done) {
    del(['dist'], done);
});

gulp.task('copy', function(){
    gulp.src([PATHS.html])
        .pipe(gulp.dest(PATHS.dist))
});

gulp.task('tsc', ['copy'], function () {
    var tscConfig = require('./tsconfig.json');
    var tsResult = gulp
        .src([PATHS.src, 'node_modules/angular2/typings/browser.d.ts'])
        .pipe(tsc(tscConfig.compilerOptions));

    return tsResult.js.pipe(gulp.dest(PATHS.dist));
});

gulp.task('play', ['tsc'], function () {
    var port = 9000, app;

    gulp.watch(PATHS.src, ['tsc']);

    app = connect().use(serveStatic(__dirname));
    http.createServer(app).listen(port, function () {
        open('http://localhost:' + port);
    });
});

gulp.task('default', ['play']);