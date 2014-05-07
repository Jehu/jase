module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		less: {
			development: {
				options: {
					paths: ["less"],
					sourceMap: true
				},
				files: {
					"css/style.css" : "less/style.less"
				}
			} 
		},

		watch: {
			options: {
				spawn: true,
				interrupt: true
			},
			less: {
				files: ['less/*.less'],
				tasks: ['less']
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

	grunt.registerTask('default', ['less']);

};
