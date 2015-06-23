'use strict';
var binVersionCheck = require( 'bin-version-check' );

module.exports = function( grunt ) {
    var wellington = require( './lib/wellington' ).init( grunt );

  function compile( args, cb ) {
        var child = grunt.util.spawn( {
            cmd: args.shift(),
            args: args
        }, function( err, result, code ) {
            // `wt` exits with 1 on general-purpose errors.
            if ( code === 1){
                grunt.fatal('A Wellington error occurred.', result.stderr, code);
            }
            if ( code === 127 ) {
                grunt.warn(
                    'You need to have Wellington and libsass installed ' +
                        'and in your system PATH for this task to work. ' +
                        'More info: https://github.com/wellington/wellington'
                );
            }

            // `wt` exits with 2 if theres nothing to compile
            // Don't fail the task in this situation.
            if ( code === 2 && !/Nothing to compile|Wellington can't find any Sass files to compile/g.test( result.stderr ) ) {
                grunt.warn( '↑' );
            }

            cb();
        } );
        if ( child ) {
            child.stdout.pipe( process.stdout );
            child.stderr.pipe( process.stderr );
        }
    }

    grunt.registerMultiTask( 'wellington', 'Compile Sass to CSS using Wellington', function() {
        var options = this.options();
        var cb = this.async();

        var args = wellington.buildArgsArray( options, this.files[0].src );
        binVersionCheck( args[ 0 ], '>=0.6.0', function( err ) {
            if ( err ) {
                grunt.warn( err );
            }

            compile( args, function() {
                cb();
            } );
        } );
    } );
};
