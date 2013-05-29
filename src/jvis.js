define(function (require) {
    'use strict';
    
    var moduleName = 'jvis',
    
    angular = require('angular'),
    
    $ = require('jquery');
    
    // include bootstrap
    require(['bootstrap', 'bootstrap-modal']);
 
    /**
     * Application code
     */
    
    // create module
    var module = angular.module(moduleName, []);
    
    // create controller
    module.controller('MainCtrl', [
        '$scope', function ($scope) {
            
            $scope.phones = [
                {name: 'test', snippet: 'snippet'},
                {name: 'second', snippet: 'second snippet'}
            ];

        }
    ]);
    
    // bootstrap application
    $(document).ready(function () {
        $('html').attr({
            'class': 'ready',
            'ng-app': moduleName
        });
        
        // bootstrap angular
        angular.bootstrap(this, [moduleName]);
    });
    
    return module;
});