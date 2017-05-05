module.exports = function(grunt) {
	
	// Project configuration.
	grunt.initConfig({
  	
    jshint: {
        all: ['js/*.js']
        },
        sass: {
          options: {
            sourceMap: true
      },
        dist: {
        files: {
          'css/style.css':'sass/style.sass'
        }
      }
    },
    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'images/build/'
            }]
        }
     },
    watch: {
        scripts: {
            files: ['sass/*.sass'],
            tasks: ['sass'],
            options: {
                spawn: false,
            },
        } 
    },
    browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'app/css/*.css',
                        'app/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './app'
                }
            }
        }
	});
	// Load the plugins tasks
	
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['jshint', 'sass', 'imagemin', 'browserSync', 'watch']);
    };