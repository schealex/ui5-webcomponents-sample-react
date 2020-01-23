module.exports = function(grunt) {
    const sUser = grunt.option('user');
    const sPwd = grunt.option('pwd');
    const sServer = grunt.option('server');
    const sPackage = grunt.option('package');
    const sContainer = grunt.option('container');
    const sTransp = grunt.option('transp');
    // Project configuration.
    grunt.initConfig({
        nwabap_ui5uploader: {
            options: {
                conn: {
                    server: sServer,
                    useStrictSSL: false
                },
                auth: {
                    user: sUser,
                    pwd: sPwd
                }
            },
            upload_build: {
                options: {
                    ui5: {
                        package: sPackage,
                        bspcontainer: sContainer,
                        bspcontainer_text: 'UI5 upload local objects',
                        transportno: sTransp
                    },
                    resources: {
                        cwd: 'build',
                        src: '**/*.*'
                    }
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-nwabap-ui5uploader');
    grunt.registerTask('default', ['nwabap_ui5uploader']);
};
