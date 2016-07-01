// Javascript to do: linkUrlHelper.js

(function($) {
	$.fn.asyncSiteMapLink = function(options) {
		var setings = $.extend({
			
		}, options);
		
		return this.each(function() {
			$(this).click(function(event) {
				window.history.pushState('', '', $(this).attr("href"));
				$.ajax({
					url:"/",
					type: "POST",
					data: {
						urlMap : $(this).attr("href")
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