(function($) {
              
    $.fn.applyGridBehavior = function(options) {
        var settings = $.extend({
            rowDefinitions: [],
            columnDefinitions: []
        }, options);

        var elements = [];

        window.addEventListener("resize", function() {
            console.log("test bullshit");
        });

        return this.each(function() {

        });
    }

})(jQuery);