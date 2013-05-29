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
    deps : ['jvis']
});