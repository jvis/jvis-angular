require.config({
    paths : {
        bootstrap : "../components/bootstrap/js/bootstrap.min",
        jquery    : "../components/jquery/jquery.min",
        angular   : "../components/angular/angular.min",

        // Bootstrap-modal depends on Bootstrap
        "bootstrap-modal"        : '../components/bootstrap-modal/js/bootstrap-modal',
        "bootstrap-modalmanager" : '../components/bootstrap-modal/js/bootstrap-modalmanager'
    },
    shim : {
        angular : {
            exports : 'angular'
        },
        bootstrap : {
            deps : ['jquery']
        },
        'bootstrap-modal': {
            deps : ['bootstrap']
        },
        'bootstrap-modalmanager': {
            deps : ['bootstrap']
        }
    },
    waitSeconds: 30,
    deps : ['jquery']
});

require(['jquery', 'bootstrap', 'bootstrap-modal', 'bootstrap-modalmanager'], function ($) {
    "use strict";

    var bootstrap = {

        init: function () {
            $(document).ready($.proxy(this.onReady, this));
            return this;
        },

        start: function (app) {
            app.start(document);
        },

        onReady: function (e) {
            // start application
            require(['app'], this.start);
        }
    };

    // bootstrap application
    bootstrap.init();
});