(function($) {
              
    $.fn.applyGridBehavior = function(options) {
        var settings = $.extend({
            rowDefinitions: [],
            columnDefinitions: []
        }, options);

        var elements = [];

        return this.each(function() {
            var me = $(this);
            $(window).resize(function() {
                var childElements = me.children();
               
            });
        });
    }

})(jQuery);