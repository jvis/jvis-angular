define(function (require) {

    /**
     * @file main application file
     */
    
    var angular = require('angular'),
    
    $ = require('jquery'),
    
    MainCtrl = require('controllers/main');
    
    return {
        
        init : function () {
            if (this._init) return this;
            
            // cache commonly used elements
            this.$window = $(window);
            this.$html = $('html');
            this.$body = $('body');

            // set initialized flag
            this._init = true;

            return this;
        },
                
        start : function (context) {
            if (this._started) return this;
            
            // initialize
            this.init();
            
            // set hook classes
            this.$html.removeClass('waiting').addClass('start'); 
            
            // bootstrap angular
            angular.bootstrap(context);
            
            // set started flag
            this._started = true;
            
            return this;
        }

    };
});