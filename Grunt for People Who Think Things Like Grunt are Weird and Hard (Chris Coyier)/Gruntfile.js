module.exports = function (grunt) {
    
    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here
            dist: {
                src: [
                    'app/js/lib/*.js',
                    'app/js/*.js'
                ],
                dest: 'dist/js/production.js',
            }
        },

        uglify: {
            build: {
                src: 'dist/js/production.js',
                dest: 'dist/js/production.min.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'app/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist'
                }]
            }
        },

        watch: {
            scripts: {
                files: ['app/js/**/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: true
                }
            }
        },
    });

    // 3. Wher we tell Grunt we plan to use this plug-initConfig
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // 4. Where we tell Grunt what to do when we type "grunt' into the termincal
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);
};