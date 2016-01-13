'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    watch: {
      less: {
        files: ['public/css/*.less'],
        tasks: ['less:build']
      }
    },
    less: {
      build: {
        files: {
          'public/css/landing-page.css': 'public/css/app.less'
        },
        options: {
          cleancss: true,
          strictMath: true
        }
      }
    }
  });
};
