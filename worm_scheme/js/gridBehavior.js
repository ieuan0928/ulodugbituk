(function($) {
    $.fn.applyGridBehavior = function(options) {
        var settings = $.extend({

        }, options);

        return this.each(function() {
            $(this).click(function() {
                alert("bullshit");
            })
        })
    }

})(jQuery);