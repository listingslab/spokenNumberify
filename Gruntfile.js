module.exports = function(grunt) {
  
	grunt.initConfig({
		jshint: {
			files: ['Gruntfile.js', 'public/js/main.js'],
			options: {
				globals: {
					jQuery: true
				}
			}
		},
		uglify: {
			my_target: {
				files: {
					'public/js/spokenNumberify.min.js': 
					[
						'src/convertNumber.js',
						'src/createHundreds.js',
						'src/createOnes.js',
						'src/createTens.js',
						'src/main.js',
						'src/printError.js',
						'src/printEquivalent.js',
						'src/validate.js',
					]
				}
			}
		},
		watch: {
			files: ['Gruntfile.js', 'src/**/*.js'],
			tasks: ['jshint', 'uglify']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['jshint']);

};