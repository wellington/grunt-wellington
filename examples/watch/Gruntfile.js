/* jshint node:true, maxlen:140 */

module.exports = function ( grunt ) {

	grunt.initConfig( {

		wellington: {
			www: {
				src: [
					'www/gui/sass/**/*.scss',
					'!www/gui/sass/**/_*.scss'
				],
				options: {
					p: 'www/gui/sass',
					b: 'www/gui/build/css',
					d: 'www/gui/im/sass',
					font: 'www/gui/font-face',
					gen: 'www/gui/build/im'
				}
			},
			options: {
				style: 'nested'
			}
		},

		watch: {
			// A few tasks assume the target_{sass,js} convention.
			// Namely, sauron and fresh. Take care not to break these tasks
			// if you edit this section

			// ONLY ADD CRITICAL TASKS TO THE BELOW TASKS ARRAYS
			// NON-CRITICAL TASKS SHOULD BE SPECIFIED USING
			// configs/build/sauronrc.js
			// see configs/build/sauronrc-defaults.js for more context
			options: {
				livereload: grunt.option( 'livereload' ),
				spawn: false
			},
			www_sass: {
				files: [ 'www/gui/sass/**/*.scss' ],
				tasks: [ 'wellington:www' ]
			},
			grunt_js: {
				files: [
					'Gruntfile.js'
				],
				options: {
					reload: true
				},
				tasks: []
			}
		},
	} );

	// Autoload npm tasks using load-grunt-tasks
	// See more at https://github.com/sindresorhus/load-grunt-tasks
	// load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
	require( 'load-grunt-tasks' )( grunt );

	grunt.registerTask( 'default', 'Removes the generated styles and watches for Sass changes', [ 'watch' ] );

};
