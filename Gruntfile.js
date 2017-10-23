module.exports = function(grunt) {

    // Carga todas las tareas, bye bye loadNpmTasks
    require('load-grunt-tasks')(grunt);

    // Tiempo que tardan las tareas. Ayuda para optimizar
    require('time-grunt')(grunt);

    var target = grunt.option('target') || 'local';
    var locale = grunt.option('locale') || 'es';

    //get the correct config file
    var config = (grunt.option('target')) ? grunt.file.readJSON('src/config/'+target+'.json') : grunt.file.readJSON('src/config/local.json');
    //get the config file for buld task
    var configBuild =grunt.file.readJSON('src/config/build.json');

    //properties for nexus repo, versions, servicepack,...
    var properties = grunt.file.readJSON('src/config/logosProperties.json');

    //set the version
    var versionFront = properties.major + '.' + properties.minor + '.' + properties.servicePack;
    var buildNumber =  (grunt.option('buildNumber')) ? '.' + grunt.option('buildNumber') : '-SNAPSHOT';
    var version =  versionFront + buildNumber;

    config.version = version;
    configBuild.version = version;
    var nexusUrl = (version.indexOf('SNAPSHOT') < 0) ? properties.nexusUrlRelease : properties.nexusUrlSnapshot;

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        env:{
            local:{
                NODE_ENV: 'local'
            },
            deploy:{
                NODE_ENV: 'deploy'
            },
            setTZ:{
                TZ: 'Europe/Madrid' //We do this to avoid Sonar issue #5049(http://jira.sonarsource.com/browse/SONAR-5049)
            }
        },
        clean: {
            options : {
                force: true
            },
            local: ['build', 'src/doc', 'src/app/app.concat.header.js', 'src/app/app.concat.footer.js', 'src/app/components/*.min.js','src/app/home/*.min.js','src/app/login/*.min.js','src/app/shared/*.min.js','src/app/views/*.min.js', 'logos-front*.zip', 'logos-front*.tgz'],
            build2:['build','src/app/components/<%= pkg.concatdir %>','src/app/home/<%= pkg.concatdir %>','src/app/login/<%= pkg.concatdir %>','src/app/shared/<%= pkg.concatdir %>','src/app/vews/<%= pkg.concatdir %>','src/app/main.min.js','src/app/app.concat.js','src/js/app.logos.js','src/index.html','src/assets/js/logos.config.js','logos-front*.zip'],
            build: ['build', 'src/app/app.concat.header.js', 'src/app/app.cm.header.js', 'src/app/app.concat.footer.js', 'src/app/app.cm.footer.js', 'src/assets/js/cm.config.js'],
            final: ['src/app/app.concat.header.js','src/app/app.concat.footer.js', 'src/app/app.cm.header.js','src/app/app.cm.footer.js', 'build/app/app.cm.header.js', 'build/app/app.cm.footer.js', 'build/assets/css/main.css'],
            finalLocal: ['src/app/app.concat.header.js','src/app/app.concat.footer.js', 'build/app/app.cm.header.js', 'build/app/app.cm.footer.js', 'build/assets/css/main.css']
        },
        'template': {
            dev: {
                'options': {
                    'data': config
                },
                'files': {
                    'src/assets/js/cm.config.js': ['src/config/config.js.tpl']
                }
            },
            build: {
                'options': {
                    'data': configBuild
                },
                'files': {
                    'src/assets/js/cm.config.js': ['src/config/config.js.tpl']
                }
            }
        },
        preprocess : {
            options: {
                context : {
                    DEBUG: false
                }
            },
            html : {
                src : 'src/index.dev.html',
                dest : 'src/index.html'
            }
        },
        concat: {
            options: {
            },
            header: {
                src: ['<%= pkg.jsdir %>/libs/angular/angular.js',
                      '<%= pkg.jsdir %>/libs/angular/angular-ui-router.min.js',
                      '<%= pkg.jsdir %>/libs/angular/angular-animate.js',
                      '<%= pkg.jsdir %>/libs/angular/ngStorage.min.js',
                ],
                dest: '<%= pkg.appdir %>/app.concat.header.js'
            },
            footer:{
                src: [
                    '<%= pkg.appdir %>/app.js',
                    '<%= pkg.appdir %>/views/*.js',
                    '<%= pkg.appdir %>/home/*.js',
                    '<%= pkg.appdir %>/shared/*.js',
                ],
                dest: '<%= pkg.appdir %>/app.concat.footer.js'
            }
        },
        //minified js
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mangle: false,
                compress: {
                    global_defs: {
                        "DEBUG": false
                    },
                    dead_code: true
                }
            },
            header: {
                    src: '<%= pkg.appdir %>/app.concat.header.js',
                    dest: '<%= pkg.appdir %>/app.cm.header.js'
            },
            footer:{
                    src: '<%= pkg.appdir %>/app.concat.footer.js',
                    dest: '<%= pkg.appdir %>/app.cm.footer.js'
            }
        },
        // copy src files into build dir
        copy: {
            main: {
                expand: true,
                cwd: 'src/',
                src: ['assets/img/**',
                      'assets/css/main.css',
                      'assets/fonts/**',
                      'assets/languages/**',
                      '!assets/js/libs/angular/**',
                      '!config/**',
                      '!tests/**',
                      '!app/**/**',
                      'assets/js/cm.config.js',
                      'app/app.cm.header.js',
                      'app/app.cm.footer.js',
                      'index.html'
                    ],
                dest: '<%= pkg.builddir %>'
            }
        },
        filerev: {
            options: {
                algorithm: 'md5',
                length: 8
            },
            js: {
                src: ['src/app/app.cm.header.js', 'src/app/app.cm.footer.js'],
                dest: 'build/app/'
            },
            css: {
                src: ['src/assets/css/main.css'],
                dest: 'build/assets/css/'
            }
        },
        filerev_replace: {
            options: {
                assets_root: 'src/',
                views_root: 'build/'
            },
            views: {
                src: 'build/index.html'
            }
        },
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            all: ['Gruntfile.js', '!src/**/**', 'src/app/app.js', 'src/app/**/*.js', 'src/assets/js/*.js']
        },
        html2js: {
            main: {
                src: ['src/app/**/*.html'],
                dest: 'src/app/views/templates.js'
            }
        },
        express: {
            all:{options: {port: 4040, hostname: 'localhost', bases: 'src/', livereload: false } },
            build:{options: {port: 4040, hostname: 'localhost', bases: 'build/', livereload: false } }
        },
        esteWatch: {
            options: {
                dirs: ['src/app/**/**','src/assets/css/**/**','src/assets/js/**', 'src/assets/libs/**', '!src/config', '!src/coverage'],
                livereload: {
                    extensions: ['js','css','html', 'scss'],
                    enabled: true,
                    port: 38729
                }
            },
            scss: function(filepath){
                return ['sass', 'html2js'];
            }
        },
        watch: {
            scripts: {
                files: ['src/app/**/*.js','src/assets/**/*.scss','src/assets/**/*.js', 'src/app/**/*.html'],
                tasks: ['jshint', 'compile'],
                options: {
                  spawn: false
                }
            },
            options: {
                livereload: {
                    host: 'localhost',
                    enabled: true,
                    port: 38729
                }
            }
        },
        open: {
            all: {
                // Gets the port from the connect configuration
                path: 'http://<%= express.all.options.hostname %>:<%= express.all.options.port %>'
            }
        },
        karma: {
            unit: {
                configFile: 'src/tests/karma.conf.js',
                singleRun: true
            },
            watch: {
                configFile: 'src/tests/karma.conf.js'
            }
        },
        protractor_webdriver: {
            update: {
                options: {
                    command: 'webdriver-manager update --standalone'
                }
            },
            alive: {
                options:{
                    command: 'webdriver-manager start',
                    keepAlive: true
                }
            },
            dead: {
                options: {
                    command: 'webdriver-manager clean'
                }
            }
        },
        protractor: {
            options: {
                keepAlive: false,
                noColor: false,
                debug: false
            },
            local: {
                options: {
                    configFile: 'src/tests/protractor.local.conf.js'
                }
            },
            dev: {
                options: {
                    configFile: 'src/tests/protractor.conf.js'
                }
            }
        },
        sonarRunner: {
            analysis: {
                options: {
                    debug: false,
                    separator: '\n',
                    maxBuffer: 10 * 1024 * 1024, // in MB
                    sonar: {
                        verbose: false,
                        host: {
                            url: 'http://sonar.paradigmatecnologico.com:9000/sonar/'
                        },
                        login: 'gocd',
                        password: 'sonarGoCD',
                        jdbc: {
                            url: 'jdbc:mysql://sonar.paradigmatecnologico.com:3306/sonar?autoReconnect=true&useUnicode=true&characterEncoding=utf8'
                        },
                        projectKey: 'logos-front',
                        projectName: 'ISBAN Logos front',
                        projectVersion: version,
                        sources: ['src'].join(','),
                        exclusions: ['src/assets/css/**/**/**', 'src/assets/**/**', 'src/assets/languages/**/**','src/config/**/**'].join(','),
                        sourceEncoding: 'UTF-8',
                        javascript: {
                            lcov: {
                                reportPath: 'src/tests/unit/reports/coverage/lcov.info'
                            },
                            jstest: {
                                reportsPath: 'src/tests/unit/reports/html'
                            }
                        },
                        /*coverage: {
                            exclusions: ['src/js/directives/**'].join(','),
                        },*/
                        analysis: {
                            mode: (grunt.option('local')) ? 'preview' : 'full'
                        }
                    }
                }
            }
        },
        compress: {
            main: {
                options: {
                    archive: 'logos-front-' + version + '.tgz'
                },
                files: [
                    {expand: true, cwd: 'build/', src: ['**'], dest: './html'},
                    {src: ['./default.conf'], dest: './conf.d'},
                ]
            }
        },
        nexusDeployer: {
           release: {
                options: {
                    groupId: "com.isban.logos",
                    artifactId: "logos-front-client",
                    version: version,
                    packaging: 'tgz',
                    auth: {
                        username: properties.nexusUser,
                        password: properties.nexusPassword
                    },
                    pomDir: 'build/pom',
                    url: nexusUrl,
                    artifact: 'logos-front-' + version + '.tgz'
                    //artifact: 'resa-front.tgz'
                }
            }
        }
    });

    // Task for launch karma tests
    grunt.registerTask('test', ['template:dev', 'html2js', 'karma:unit']);

    // Server
    grunt.registerTask('server', ['express', 'open', 'watch']);

    // scss and templates compilation
    grunt.registerTask('compile', ['html2js']);


    // Task for hint js code
    grunt.registerTask('analysis', ['jshint']);


    grunt.registerTask('local', ['env:local', 'clean:build', 'template:dev', 'jshint', 'compile', 'preprocess', 'server']);
    grunt.registerTask('buildLocal', ['env:deploy', 'clean:build', 'template:dev', 'compile', 'preprocess', 'concat', 'uglify', 'copy', 'filerev', 'filerev_replace', 'clean:finalLocal', 'compress', 'server2']);
    grunt.registerTask('build', ['env:deploy', 'clean:build', 'template:build', 'compile', 'preprocess', 'concat', 'uglify', 'copy', 'filerev', 'filerev_replace', 'clean:final', 'compress']);

    grunt.registerTask('cm', 'Write especified target(development, local (integration)), generate config file and execute task. Run server default, or -target=local.', function(n) {
        grunt.task.run(target);
    });
};
