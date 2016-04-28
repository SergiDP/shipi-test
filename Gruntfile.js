module.exports = function (grunt) {

  /**
   * Initialize config.
   */

  grunt.initConfig({
    jshint: {
      all: ['routes/*.js']
    }
  });

  /**
   * load tasks
   */

  grunt.loadNpmTasks('grunt-contrib-jshint');

};