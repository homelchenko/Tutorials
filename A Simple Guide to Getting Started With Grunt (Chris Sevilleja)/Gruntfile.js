module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                reporter: require('jshint-stylish'),
            },

            build: [
                'Gruntfile.js',
                'src/**/*.js',
            ],
        },

        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n',
            },

            build: {
                files: {
                    'dist/js/magic.min.js': [
                        'src/js/magic.js',
                        'src/js/magic2.js',
                    ],
                },
            },
        },

        less: {
            build: {
                files: {
                    'dist/css/pretty.css': 'src/css/pretty.less',
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
};