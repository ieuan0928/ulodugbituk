(function($) {
	$.fn.asyncSiteMapLink = function(options) {
		var settings = $.extend({
			urlRefreshOrdinal: null,
		}, options);
		
		return this.each(function() {
			$(this).click(function(event) {
				window.history.pushState('', '', $(this).attr("href"));
				$.ajax({
					url:"/",
					type: "POST",
					data: {
						urlMap : $(this).attr("href"),
						urlRefreshOrdinal: settings.urlRefreshOrdinal
					},
					success: function(data) {
						console.log(data);
						$("#" + data.pageViewerName).html(data.contentBuffer);
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