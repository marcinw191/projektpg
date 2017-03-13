'use strict';

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({
        clean: {
            contents: ['public/*']
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'source', src: '**', dest:'public/'}
                ]
            }
        }
    });

    grunt.registerTask('build',['clean', 'copy']);
};