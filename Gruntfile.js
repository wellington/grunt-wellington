/*
 * grunt-contrib-compass
 * http://gruntjs.com/
 *
 * Copyright (c) 2014 Sindre Sorhus, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: {
            name: 'grunt-wellington'
        },
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            test: [
                'tmp',
                'tmp2',
                'tmp3',
                'tmp4',
                'tmp5',
                '.sass-cache'
            ]
        },

        // Configuration to be run (and then tested).
        wellington: {
           compile: {
                src:['test/fixtures/*.scss'],
                options: {
                    p: 'test/fixtures',
                    b: 'tmp',
                }
            },
            // This triggers reading from stdin, which grunt doesn't do well
            // compileNothing: {
            //   src:['notafile'],
            //   sass: 'ishere',
            //     options: {
            //         p: 'test/doesnt-exist',
            //     }
            // },
            compileSass: {
                src: ['test/fixtures/*.sass'],
                options: {
                    //p: 'test/fixtures',
                    b: 'tmp4'
                }
            },
            options: {
                style: 'compressed'
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-internal');

    grunt.registerTask('mkdir', grunt.file.mkdir);

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', [
        'jshint',
        'clean',
        'mkdir:tmp',
        'mkdir:tmp2',
        'mkdir:tmp3',
        'wellington',
        'nodeunit',
        'clean'
    ]);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['test', 'build-contrib']);
};
