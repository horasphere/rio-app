//var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

module.exports = function (grunt) {
	var webpack = require("webpack");
	var webpackConfig = require("./webpack.config.js");


	grunt.initConfig({
		target: grunt.file.readJSON('package.json'),
        timestamp: new Date().getTime(),
        webpack: {
			options: webpackConfig,
			"build-dist": {
               // output: webpackOutputConfig
            },
			"build-dev": {
                stats: {
                    // Configure the console output
                    colors: true,
                    modules: false,
                    reasons: true
                },
                devtool: "eval",
                debug: true,
                watch: true,
                cache: true
                //keepAlive: true
			}
		},

		connect: {
			dev: {
				options: {
					port: 8000,
                    base: '',
					hostname: '0.0.0.0',
                    livereload: true,
                    keepalive: true, //if set to true watch doesn't work
					middleware: function (connect, options) {
						return [
							connect.static(options.base, { index: 'index.html' })
						];
					}
				}
			}
		},

        bower: {
          install: {
            options: {
              copy: false
            }
          }
        }
	});

    grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);

});

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-webpack');


    grunt.registerTask("dev", ['bower:install', 'webpack:build-dev', 'connect:dev'])
};
