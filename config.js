/**
 * Remote STB device connection configuration for ssh tasks.
 *
 * Available template variables:
 *     {host} - client ip where this gulp task is running
 *     {port} - client port where this gulp task is running
 *
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var extend   = require('extend'),
    config   = require('spa-plugin-ssh/config'),
    //static   = require('spa-plugin-static/config'),
    profiles = {};


// main
profiles.default = extend(true, {}, config.default, {
    // ssh2 package connection options
    connection: {
        host: 'localhost',
        port: 22,
        username: 'root',
        password: '930920'
    },

    // a task for each key
    commands: {
        reboot: 'reboot',
        status: 'cat /proc/$(pidof stbapp)/status',
        kill: 'killall -9 stbapp',
        clear: 'fbdump -c',
        test: 'killall stbapp; /test.sh'
    }

    /*// restart device
     reboot: {
     exec: 'reboot'
     },

     // stbapp process info
     status: {
     exec: 'cat /proc/$(pidof stbapp)/status'
     },

     // force stop stbapp process
     kill: {
     exec: 'killall -9 stbapp'
     },

     // paint black the screen
     clear: {
     exec: 'fbdump -c'
     },

     // usual stb start
     test: {
     exec: 'killall stbapp; /test.sh'
     },

     // direct internal portal start
     portal: {
     exec: 'killall stbapp; /usr/share/qt-4.6.0/stbapp -qws -display directfb "/home/web/services.html"'
     },

     // extends the default config
     develop: {
     exec: 'killall stbapp; /usr/share/qt-4.6.0/stbapp -qws -display directfb http://%host%:%port%/develop.html'
     },

     // extends the default config
     release: {
     exec: 'killall stbapp; /usr/share/qt-4.6.0/stbapp -qws -display directfb http://%host%:%port%/index.html'
     }*/
});


// public
module.exports = profiles;
