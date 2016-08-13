(function($) {
    $.fn.applyGridBehavior = function(options) {
        var settings = $.extend({
            rowDefinitions: [],
            columnDefinitions: []
        }, options);

        return this.each(function() {
            $(this).on("resize", function() {
                alert("resize bullshit");
            });
            $(this).click(function() {
                alert("bullshit");
                alert($(this).attr("id"))
                $(this).css("height", "200px");
            })
        })
    }

})(jQuery);