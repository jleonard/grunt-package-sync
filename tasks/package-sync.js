/*
 * grunt-package-sync
 * https://github.com/jleonard/grunt-package-sync
 *
 * Copyright (c) 2013 John Leonard
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('package_sync', 'A grunt plugin to keep data in multiple package.json in sync.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      var src = f.src.filter(function(filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        var master = grunt.file.readJSON(options.master);
        var file = grunt.file.readJSON(filepath);

        for(var i = 0; i < options.properties.length; i++){
          file[options.properties[i]] = master[options.properties[i]];
        }

        var str = JSON.stringify(file,null,2);
        grunt.file.write(filepath, str);
        return file;
      });

    });
  });

};
