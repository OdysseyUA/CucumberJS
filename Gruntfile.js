module.exports = function (grunt) {
    'use strict';

    var capabilities = {
        allScriptsTimeout: 40000,
        getPageTimeout: 40000,
        browserName: 'firefox',
        shardTestFiles: true,
        maxInstances: 1,
        restartBrowserBetweenTests: true
    };

    var cucumberOpts = {
        tags: grunt.option('tag')
    };


/*
    grunt.registerTask('ang-bdd', ['jshint', 'protractor:angular']);
    grunt.registerTask('hw-bdd', ['jshint', 'protractor:hw']);
*/

    grunt.registerTask('ang-bdd', ['protractor:angular']);
    grunt.registerTask('hw-bdd', ['protractor:hw']);

    var pkg = grunt.file.readJSON('package.json');
    var version = pkg.version;


    grunt.initConfig({
        version: version,

        watch: {
            options: {
                livereload: true
            },
            dev: {
                files: ['shared/**/*.*', 'index.html', 'src/**/*.*'],
                tasks: ['less:styles']
            }
        },


        protractor: {
            options: {
                keepAlive: false, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
                configFile: 'test/cucumber.config.js'
            },
            angular: {
                options: {
                    args: {
                        directConnect: true,
                        capabilities: capabilities,
                        cucumberOpts: cucumberOpts,
                        specs: ['test/features/angular/*.feature'],
                        baseUrl: grunt.option('appUrl') || ('https://angularjs.org/')
                    }
                }
            },
            hw: {
                options: {
                    args: {
                        directConnect: true,
                        capabilities: capabilities,
                        cucumberOpts: cucumberOpts,
                        specs: ['test/features/hw/*.feature'],
                        baseUrl: grunt.option('appUrl') || ('http://hfedev01.aws.hotwire.com/')
                    }
                }
            }
        },


        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js', '!src/app/*.js'],
            options: {
                jshintrc: true
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-protractor-runner');
};