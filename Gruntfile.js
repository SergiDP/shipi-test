module.exports = function (grunt) {

  /**
   * Initialize config.
   */

  grunt.initConfig({
    jshint: {
      all: ['routes/*.js']
    },
    simplemocha: {
      options: {
        globals: ['expect'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'XUnit'
      },
      all: {
        src: ['tests/*.js']
      }
    }
  });

  /**
   * load tasks
   */

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.registerTask('default', ['jshint', 'simplemocha']);

};