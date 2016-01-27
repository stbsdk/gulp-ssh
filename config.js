/**
 * Remote STB device connection configuration for ssh gulp task.
 *
 * Available template variables:
 *     {host} - client ip where this gulp task is running
 *     {port} - client port where this gulp task is running
 *
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var extend = require('extend'),
    config = require('spa-gulp/config');


// public
module.exports = extend(true, {}, config, {
    default: {
        host: '',
        port: 22,
        username: 'root',
        password: '930920'
    },

    // restart device
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
    }
});
