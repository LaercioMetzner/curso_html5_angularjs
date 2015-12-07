module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      lib: {
        src: [
              'lib/angular.js', 
              'lib/angular-locale_pt-br.js',
              'lib/bootstrap/bootstrap.js'
             ],
        dest: 'dist/lib/lib.js'
      },
      bar: {
          src: [
                'js/**/*.js'
               ],
          dest: 'dist/js/bar.js'
        }
    },
    clean: {
      dist: ["dist/"]
    },
    connect: {
      dev: {
        options: {
          port: 9000,
          hostname: 'localhost',
          base: ''
        }
      },
      dist: {
          options: {
            port: 9000,
            hostname: 'localhost',
            base: 'dist/'
          }
        }
    },
    copy: {
    main: {
      files: [
        {expand: true, src: ['img/**'], dest: 'dist/'}
      ]
    }
  },
    cssmin: {
    combine: {
      files: 
          [
           {'dist/css/styles.min.css': ['css/app.css', 'lib/bootstrap/bootstrap.css']}
          ] 
    }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: 'dist/js/bar.js',
        dest: 'dist/js/bar.min.js'
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      },
      e2e: {
        configFile: 'karma-e2e.conf.js'
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files:[
               {'dist/index.html':'production/index.html'}
              ]
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: false,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      all : ['Gruntfile.js','js/**/*.js', 'test/**/*.js']
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'qunit']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('package', ['clean', 'cssmin', 'concat', 'uglify', 'copy', 'htmlmin']);
  grunt.registerTask('test', ['concat','karma']);
  grunt.registerTask('run', ['connect:dev:keepalive']);
};