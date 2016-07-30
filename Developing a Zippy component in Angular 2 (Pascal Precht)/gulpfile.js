var gulp = require('gulp');
var typescript = require('gulp-typescript');
var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');
var open = require('open');
var del = require('del');

var PATHS = {
    src: 'src/**/*.ts'
};

gulp.task('clean', function (done) {
    del(['dist'], done);
});

gulp.task('ts2js', function () {
    var tscConfig = require('./tsconfig.json');
    var tsResult = gulp
        .src([PATHS.src, 'node_modules/angular2/typings/browser.d.ts'])
        .pipe(typescript(tscConfig.compilerOptions));

    return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('play', ['ts2js'], function () {
    var port = 9000, app;

    gulp.watch(PATHS.src, ['ts2js']);

    app = connect().use(serveStatic(__dirname));
    http.createServer(app).listen(port, function () {
        open('http://localhost:' + port);
    });
});

gulp.task('default', ['play']);