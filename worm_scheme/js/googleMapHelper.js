(function($) {
	$.fn.googleMapHelper = function(options) {
		var settings = $.extend({
			id: '',
			idFunction: '',
			latitude: '',
			longitude: '',
			zoom: ''
		}, options);
		
		return {
			mapInit: function() {
				var myLatLng = {lat: parseFloat(settings.latitude), lng: parseFloat(settings.longitude)};
				
				var map = new google.maps.Map(document.getElementById(settings.id), {
				  zoom: parseInt(settings.zoom),
				  center: myLatLng
				});

				var marker = new google.maps.Marker({
				  position: myLatLng,
				  map: map
				});
			}
		}
	}
})(jQuery);

