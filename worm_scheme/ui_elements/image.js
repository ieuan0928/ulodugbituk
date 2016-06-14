
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
	var res = wormHelper.site.get("response");
	
	var concat = "_image_container";
	
	res.write("<div id='" + this.properties.identifier + concat + "' class='" + this.properties.className + concat + "'>");
	res.write("<img id='" + this.properties.identifier + "' class='" + this.properties.className + "' src='" + this.properties.imagePath + "'></img>");
	res.write("</div>");
	
}

module.exports = image;