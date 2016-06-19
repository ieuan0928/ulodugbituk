// Javascript to do: linkUrlHelper.js

(function($) {
	$.fn.asyncSiteMapLink = function(options) {
		var setings = $.extend({
			
		}, options);
		
		return this.each(function() {
			$(this).click(function(event) {
				window.history.pushState('', '', $(this).attr("href"));
				
				return false;
			});
		});
	}
})(jQuery);