var _parent = wormHelper.refreshModule('./worm_scheme/ui_elements/controlBase.js').prototype,
	_proto = pageViewer.prototype = Object.create(_parent);
	
_proto.constructor = pageViewer;

function pageViewer() {
	_parent.constructor.apply(this);
}

_proto.get = function(propertyName) {
	switch (propertyName.trim().toLowerCase()) {
		case "map":
			return this.properties["map"];
			break;
		case "urlparameter":
			return this.properties["urlParameter"];
			break;
		default:
			return _parent.get.call(this, propertyName);
	}
}

_proto.set = function(propertyName, value) {
	switch (propertyName.trim().toLowerCase()) {
		case "map":
			this.properties["map"] = value;
			return true;
			break;
		case "urlparameter":
			this.properties["urlParameter"] = value;
			return true;
			break;
		default:
			return _parent.set.call(this, propertyName, value);
	}
}

_proto.render = function() {
	var response = wormHelper.site.properties.response;
	var myMap = this.properties.map;
	
	response.write(this.properties.urlParameter);
	var pageType = wormHelper.refreshModule(myMap.childMap[myMap.defaultKey].modulePage);
	var pageObject = new pageType();

	pageObject.createElements();
	pageObject.render();
}

module.exports = pageViewer;


