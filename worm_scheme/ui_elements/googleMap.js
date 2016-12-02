
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/controlBase.js").prototype,
	_proto = googleMap.prototype = Object.create(_parent);
	
_proto.constructor = googleMap;

var count = 0;

function googleMap() {
	_parent.constructor.apply(this);
	
	var default_class = "googleMap_Default_Class";
	this.set("className", default_class);
}

_proto.set = function(propertyName, value) {
	switch(propertyName.trim().toLowerCase()) {
		case "googlemapapikey":
			this.properties["googleMapAPIKey"] = value;
			return true;
		case "latitude":
			this.properties["latitude"] = value;
			return true;
		case "longitude":
			this.properties["longitude"] = value;
			return true;
		case "zoom":
			this.properties["zoom"] = value;
			return true;
		default:
			return _parent.set.call(this, propertyName, value);
	}
};

_proto.get = function(propertyName) {
	switch(propertyName.trim().toLowerCase()) {
		default:
			return _parent.get.call(this, propertyName);
	}
};

_proto.preRender = function() {
	wormHelper.site.jsBundler("/ws_js/googleymapa.js", "./worm_scheme/js/googleMapHelper.js");
};

_proto.render = function() {

	var concat = "_map_container";
	var inlineStyle = this.getInlineStlye();
	
	wormHelper.writeResponse("<div id='" + this.properties.identifier + concat + "' class='" + this.get("className") + concat + "'>");
	wormHelper.writeResponse("<div style='" + inlineStyle + "' id='" + this.properties.identifier + "' class='" + this.get("classCollection") + "'></div>");
	wormHelper.writeResponse("</div>");

};

_proto.postRender = function() {
	var id = this.properties.identifier;
	var googlemapapikey = this.properties.googleMapAPIKey;
	var latitude = this.properties.latitude;
	var longitude = this.properties.longitude;
	var zoom = this.properties.zoom;
	var concat_function = "_function";
	
	if(count == 0)
		wormHelper.writeResponse("<script src='https://maps.google.com/maps/api/js?key=" + googlemapapikey + "'></script>");
	count++;
	
	wormHelper.writeResponse("<script>");
	wormHelper.writeResponse("var call_helper = $.fn.googleMapHelper({'id': '" + id + "', 'idFunction': '" + id + concat_function + "', 'latitude': '" + latitude + "', 'longitude': '" + longitude + "', 'zoom': '" + zoom + "'});");
	wormHelper.writeResponse("google.maps.event.addDomListener(window, 'load', call_helper.mapInit);");
	wormHelper.writeResponse("</script>");
	
	//wormHelper.writeResponse("<script async defer src='https://maps.googleapis.com/maps/api/js?key=" + googlemapapikey + "&callback=call_helper.mapInit'></script>");
	
}

module.exports = googleMap;