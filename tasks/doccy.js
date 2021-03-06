/*
 * grunt-doccy
 * https://github.com/doclements/grunt-doccy
 *
 * Copyright (c) 2013 Olly Clements
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var path = require('path');


module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
  delete require.cache;
  //console.log('#########',require.cache['node_modules/doccy/index.js']);
  var doccy = require('doccy');
  

  grunt.registerMultiTask('doccy', 'A grunt task for generating documentation using doccy from https://github.com/jackfranklin/doccy', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    var done = this.async();
    //console.log(this);
    // Iterate over all specified file groups.
    this.files.forEach(function(f) {

      


        var dest = f.dest.toString();
        
        if (!fs.existsSync(dest)) {
          grunt.log.warn('dest does not exist. creating ' + dest);
          grunt.file.mkdir(dest, '0755');
        }
          var count = 1;

          f.src.forEach(function(src_file) {
              var _in = src_file;
              //console.log(path.sep);
              var filename = src_file.split('/');
              //console.log(filename);
              filename = filename[filename.length - 1];
              filename = filename.split('.')[0];
              var _out = dest + '/' + filename + '.md';
              //console.log(_in);
              //console.log(_out);
              if(count<f.src.length){
              doccy.init(_in, _out);
              }
              else {
                doccy.init_grunt(_in, _out, done);
              }
              count++;

              //console.log(doccy);
              //done();
              //console.log(it);
              grunt.log.ok('File "' + _out + '" created.');
            });


         
        


      

    });
  });

};