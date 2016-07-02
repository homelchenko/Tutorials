module.exports = function (grunt) {
    
    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here
        }
    });

    // 3. Wher we tell Grunt we plan to use this plug-initConfig
    grunt.loadNpmTasks('grunt-contrib-concat');

    // 4. Where we tell Grunt what to do when we type "grunt' into the termincal
    grunt.registerTask('default', ['concat']);
};