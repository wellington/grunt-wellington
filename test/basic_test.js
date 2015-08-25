'use strict';
var fs = require('fs');
var grunt = require('grunt');
var wt = require('../tasks/lib/wellington').init(grunt);

exports.wt = {
  compile: function (test) {
    test.expect(1);
    test.ok(/border-color:#3bbfce/.test(grunt.file.read('tmp/compile.css')), 'should compile Scss to CSS');
    test.done();
  },
  // Skip this test until wt release with .sass parsing
  sass: function (test) {
    test.expect(1);
    test.ok(/{color:red}/.test(grunt.file.read('tmp4/simple.css')), 'should compile Sass to CSS');

    test.done();
  }
};
