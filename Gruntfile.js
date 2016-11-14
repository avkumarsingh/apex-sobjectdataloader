'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        root: 'app/',
        build: 'app/build',
        source: 'app/source',
        srcAssets: 'app/source/assets',
        srcTemplates: 'app/source/templates',
        buildAssets: 'app/build/assets',


        // Precompile handebars

        handlebars: {
            options: {
                namespace: 'lillyClassified.Templates',
                processName: function(filePath) {
                    // return filePath.replace(/^templates\//, '').replace(/\.hbs$/, '');
                    return filePath.substring(filePath.lastIndexOf('/')+1,filePath.lastIndexOf('.'))
                }
            },

            all: {
                files: {
                    "<%= buildAssets %>/js/templates.js": ["<%= srcTemplates %>/**/*.hbs"]
                }
            }
        },


        // HTML template
        assemble: {
            options: {
                assets: "assets",
                partials: '<%= srcTemplates %>/partials/{,*/}*.hbs',
                layoutdir: '<%= srcTemplates %>/layouts/',
                flatten: true,
                layout: 'default.hbs',
                data: '<%= srcTemplates %>/data/*.json'
            },
            pages: {
                options: {
                    layout: 'default.hbs'
                },
                files: {
                    '<%= build %>/': ['<%= srcTemplates %>/pages/*.hbs']
                }
            }

        },
        // Grunt Compass Docs: https://github.com/gruntjs/grunt-contrib-sass
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    '<%= buildAssets %>/css/app.css': '<%= srcAssets %>/scss/app.scss',
                    //'<%= buildAssets %>/css/materialize.css': '<%= srcAssets %>/scss/materialize.scss',//
                    //'<%= buildAssets %>/css/components/{,*/}*.css': '<%= srcAssets %>/scss/components/{,*/}*.scss',//
                }
            }
        },

        jshint: {
            all: [
                'Gruntfile.js',
                '<%= srcAssets %>/js/{,*/}*.js'
            ]
        },

        clean: {
            dist: {
                src: ['<%= build %>/**', '.tmp']
            },
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= srcAssets %>/',
                    src: ['images/**', 'fonts/**', 'json/**'],
                    dest: '<%= buildAssets %>/',
                    filter: 'isFile'
                },
                {
                    expand: true,
                    cwd: '<%= srcTemplates %>/',
                    src: ['data/**'],
                    dest: '<%= buildAssets %>/',
                    filter: 'isFile'
                }]
            },
        },

        concat: {
            compile: {
                options: {
                    // Replace all 'use strict' statements in the code with a single one at the top
                    banner: '',

                    stripBanners: true
                },
                files: {
                    '<%= buildAssets %>/css/app.css': '<%= srcAssets %>/scss/app.scss',
                    '<%= buildAssets %>/css/materialize.css': '<%= srcAssets %>/scss/materialize.css',
                    //'<%= buildAssets %>/css/components/forms/*.css': '<%= srcAssets %>/scss/components/forms/*.scss',
                    //'<%= buildAssets %>/css/components/date_picker/*.css': '<%= srcAssets %>/scss/components/date_picker/*.scss',
                    //'<%= buildAssets %>/css/components/*.css': '<%= srcAssets %>/scss/components/*.scss',
                    '<%= buildAssets %>/js/libs.js': [
                        '<%= srcAssets %>/js/libs/jquery-2.2.4.js',
                        '<%= srcAssets %>/js/libs/materialize.js',
                        '<%= srcAssets %>/js/libs/handlebars-v3.0.3.js',
                        '<%= srcAssets %>/js/libs/slick.min.js',
                        /*
                        '<%= srcAssets %>/js/libs/handlebars-v4.0.5.js',
                        '<%= srcAssets %>/js/libs/modernizr.js',
                        // '<%= srcAssets %>/js/libs/handlebars.runtime-v1.3.0.js',
                        '<%= srcAssets %>/js/libs/jquery.touchSwipe.min.js',
                        '<%= srcAssets %>/js/libs/bootstrap.min.js',
						'<%= srcAssets %>/js/libs/jquery.mask.min.js',
                        '<%= srcAssets %>/js/libs/jquery-ui-timepicker.js',
                        '<%= srcAssets %>/js/libs/jqcloud-1.0.4.js',
                        '<%= srcAssets %>/js/libs/modernizr.custom.js',
                        '<%= srcAssets %>/js/libs/classie.js',
                        '<%= srcAssets %>/js/libs/sidebarEffects.js'*/


                    ],
                    '<%= buildAssets %>/js/app.js': [
                        '<%= srcAssets %>/js/*.js'

                    ]

                }
            }
        },

        uglify: {
            publish: {
                options: {
                    mangle: false,
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
                    sourceMap: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= buildAssets %>/js',
                    src: '**/*.js',
                    dest: '<%= buildAssets %>/js'
                }]
            }

        },

        connect: {
            server: {
                options: {
                    port: 9090,
                    base: '<%= build %>',
                    hostname: 'localhost',
                    livereload: true,
                    open: true
                }
            }
        },

        watch: {
            livereload: {
                files: ['Gruntfile.js', '<%= build %>/**', '<%= srcAssets %>/js/*.js', '<%= srcAssets %>/js/**/*.js'],
                options: {
                    livereload: true
                }
            },
            assemble: {
                files: '**/*.hbs',
                tasks: ['assemble']
            },
            grunt: {
                files: ['Gruntfile.js', '<%= srcAssets %>/js/**/*.js']
            },
            sass: {
                files: ['<%= srcAssets %>/scss/**/*.scss'],
                tasks: ['sass']
            },
            copy: {
                files: ['<%= srcAssets %>/images','<%= srcTemplates %>/data/**'],
                tasks: ['copy']
            },
            scripts: {
                files: ['<%= srcAssets %>/js/**/*.js'],
                tasks: ['concat'],
                options: {
                    spawn: false,
                },
            }


        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-assemble');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    grunt.registerTask('build', ['clean', 'sass', 'assemble', 'handlebars', 'concat', 'copy']);
    grunt.registerTask('default', ['server']);
    grunt.registerTask('validate-js', ['jshint']);

    grunt.registerTask('server', ['build', 'sass', 'connect', 'watch']);

    grunt.registerTask('publish', 'run publish', function() {
        var task = grunt.option('target') || 'staging';

        if (task === 'debug') {
            grunt.task.run(['validate-js', 'build']);
        } else {
            grunt.task.run(['build', 'uglify']);
        }
    });
};
