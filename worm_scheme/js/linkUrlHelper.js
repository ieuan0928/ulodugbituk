// Javascript to do: linkUrlHelper.js

(function($) {
	$.fn.asyncSiteMapLink = function(options) {
		var setings = $.extend({
			
		}, options);
		
		return this.each(function() {
			$(this).click(function(event) {
				window.history.pushState('', '', $(this).attr("href"));
				$.ajax({
					type: "POST",
					contentType: "application/json; charset=UTF-8",
					data: {
						testproperty: "test1",
						test2P: "teste2"
					},
					success: function(data) {
						alert("test");
					},
					error: function() {
						alert("error");
					}
				});
				return false;
			});
		});
	}
})(jQuery);