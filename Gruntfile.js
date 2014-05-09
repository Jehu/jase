module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
    // compile LESS to CSS
		less: {
			development: {
				options: {
					paths: ["less"],
					sourceMap: false
				},
				dev: {
        options: {
            sourceMap: true
          },
          files: {
            "css/style.css": "less/style.less"
          }
        },
        prod: {
          files: {
            "css/style.css": "less/style.less"
          }
        }
			}
		},
    // automatically add prefixes
    autoprefixer: {
      options: {
        browsers: ["> 1%", "last 2 versions", "last 2 Android versions"],
        diff: true,
        expand: true
      },
      dev: {
        files: [
          {
            src: 'css/style.css'
          }
        ]
      },
      prod: {
        options: {
          diff: false
        },
        files: [
          {
            expand: true,
            src: 'css/style.css'
          }
        ]
      }
    },
    // clear a directory before build
    clean: {
      all: ['css/*','!**/README.txt']
    },
		watch: {
			options: {
				spawn: true,
				interrupt: false
			},
			less: {
				files: ['less/*.less'],
				tasks: ['less:dev','autoprefixer:dev']
			},
			livereload: {
				files: ['css/*.css','templates/**/*.tpl.php'],
				options: {
					livereload: true,
					livereloadOnError: false
				}
			}
		}
	});

	grunt.registerTask('dev', ['less:dev']);
  grunt.registerTask('prod', ['clean','less:prod','autoprefixer:prod']);
  grunt.registerTask('default', ['clean','dev']);

};
