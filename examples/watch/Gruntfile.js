/* jshint node:true, maxlen:140 */
module.exports = function ( grunt ) {

    grunt.initConfig( {

        wellington: {
            dist: {
                src: [
                    'sass/**/*.scss',   // Build all .scss files
                    '!sass/**/_*.scss'  // Don't build files starting with "_" into css files
                ],
                options: {
                    p: 'sass',       // The base folder that contains the sass.
                    b: 'build/css',  // The output folder for the built css.
                    d: 'im/sass',    // The input image folder
                    gen: 'build/im'  // The output folder for the generated sprite files.
                }
            },
            options: {
                style: 'nested'      // The style of output to be used.
            }
        },

        watch: {
            sass: {
                files: [ 'sass/**/*.scss' ],
                tasks: [ 'wellington:www' ]
            }
        },
    } );

    // Autoload npm tasks using load-grunt-tasks
    // See more at https://github.com/sindresorhus/load-grunt-tasks
    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require( 'load-grunt-tasks' )( grunt );

    grunt.registerTask( 'default', 'Removes the generated styles and watches for Sass changes', [ 'wellington' ] );

};
