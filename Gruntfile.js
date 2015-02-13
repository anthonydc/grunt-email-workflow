module.exports = function(grunt) {

    // require time-grunt plugin to display elapsed execution of grunt tasks at the top 
    //and pass in the grunt instance 
    require('time-grunt')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // require it at the top and pass in the grunt instance
        



        // Takes your scss files and compiles them to css
        sass: {
          options: {
            sourceMap: true
          },
          dist: {
            files: {
                'src/css/main.css': 'src/css/scss/main.scss'
            }
          }
        },

        


        // Assembles your email content with html layout
        assemble: {
          options: {
            layoutdir: 'src/layouts',
            flatten: true
          },
          pages: {
            src: ['src/emails/*.hbs'],
            dest: 'dist/'
          }
        },





        // Inlines your css
        premailer: {
          html: {
            options: {
              removeComments: true
            },
            files: [{
                expand: true,
                src: ['dist/*.html'],
                dest: ''
            }]
          },
          txt: {
            options: {
              mode: 'txt'
            },
            files: [{
                expand: true,
                src: ['dist/*.html'],
                dest: '',
                ext: '.txt'
            }]
          }
        },





        // Watches for changes to css or email templates then runs grunt tasks
        watch: {
          files: ['src/css/scss/*','src/emails/*','src/layouts/*'],
          tasks: ['default']
        },





        // Use Mandrill option if you want to email the design to your inbox or to something like Litmus
        // grunt send --template=transaction.html or grunt mandrill
        mandrill: {
          mailer: {
          options: {
          key: 'your-mandrill-API-key',
          sender: 'noreply@testsauce.biz',
          recipient: 'email.you.want.to.send.to@email.com',
          subject: 'This is a test email'
          },
        src: ['dist/'+grunt.option('template')]
          }
        },

        

        // Send your email template to Litmus for testing
        // grunt litmus --template=transaction.html
        litmus: {
          test: {
            src: ['dist/'+grunt.option('template')],
            options: {
              username: 'username', // Change this
              password: 'password', // Change this
              url: 'https://yourcompany.litmus.com', // Change this
              clients: ['android4', 'aolonline', 'androidgmailapp', 'aolonline', 'ffaolonline',
              'chromeaolonline', 'appmail6', 'iphone6', 'ipadmini', 'ipad', 'chromegmailnew',
              'iphone6plus', 'notes85', 'ol2002', 'ol2003', 'ol2007', 'ol2010', 'ol2011',
              'ol2013', 'outlookcom', 'chromeoutlookcom', 'chromeyahoo', 'windowsphone8'] // https://#{company}.litmus.com/emails/clients.xml
            }
          }
        }



    });

    // Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-mandrill');
    grunt.loadNpmTasks('grunt-premailer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-litmus');

    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['sass','assemble','premailer']);

    // Use grunt send if you want to actually send the email to your inbox
    grunt.registerTask('send', ['mandrill']);

    

};
