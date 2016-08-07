var gulp = require('gulp');
var tsc = require('gulp-typescript');
var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');
var open = require('open');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');

var PATHS = {
    src: 'src/**/*.ts',
    typings: 'typings/**/*.ts',
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

gulp.task('tsc', function () {
    var tscConfig = require('./tsconfig.json');
    
    return gulp
        .src([
            PATHS.src,
            PATHS.typings,
            'node_modules/angular2/typings/browser.d.ts'])
        .pipe(sourcemaps.init())
            .pipe(tsc(tscConfig.compilerOptions))
            .js.pipe(gulp.dest(PATHS.dist))                
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(PATHS.dist));
});

gulp.task('play', ['copy', 'tsc'], function () {
    var port = 9000, app;

    gulp.watch(PATHS.src, ['tsc']);
    gulp.watch(PATHS.html, ['copy']);

    app = connect().use(serveStatic(__dirname));
    http.createServer(app).listen(port, function () {
        open('http://localhost:' + port);
    });
});

gulp.task('default', ['play']);