
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/controlBase.js").prototype,
	_proto = image.prototype = Object.create(_parent);
	
_proto.constructor = image;

function image() {
	_parent.constructor.apply(this);
}

_proto.set = function(propertyName, value) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "imagepath":
			this.properties["imagePath"] = value;
			return true;
			break;
		default:
			return _parent.set.call(this, propertyName, value);
			break;
	}
};

_proto.get = function(propertyName) {
	switch(propertyName.trim().toLowerCase()) {
		default:
			return _parent.get.call(this, propertyName);
			break;
	}
};

_proto.render = function() {
	var concat = "_image_container";
	
	wormHelper.writeResponse("<div id='" + this.properties.identifier + concat + "' class='" + this.properties.className + concat + "'>");
	wormHelper.writeResponse("<img id='" + this.properties.identifier + "' class='" + this.properties.className + "' src='" + this.properties.imagePath + "'></img>");
	wormHelper.writeResponse("</div>");
	
}

module.exports = image;