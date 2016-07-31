(function($) {
    $.fn.applyGridBehavior = function(options) {
        var settings = $.extend({
            rowDefinitions: [],
            columnDefinitions: []
        }, options);

        return this.each(function() {
            $(this).resize(function() {
                alert("resize bullshit");
            });
            $(this).click(function() {
                alert("bullshit");
            })
        })
    }

})(jQuery);