// Javascript to do: linkUrlHelper.js

(function($) {
	$.fn.asyncSiteMapLink = function(options) {
		var settings = $.extend({
			siteMapOrdinal: null
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
						console.log(data);
						alert("test");
					},
					error: function(jqXHR, textStatus, errorThrown) {
						alert("error");
					}
				});
				return false;
			});
		});
	}
})(jQuery);