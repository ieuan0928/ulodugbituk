
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/controlBase.js").prototype,
	_proto = label.prototype = Object.create(_parent);
	
var contentControl = wormHelper.refreshModule("./worm_scheme/ui_elements/contentControl.js"); 
	
_proto.constructor = label;
_proto.content = null;

function label() {
	_parent.constructor.apply(this);
	this.content = new contentControl();
}

_proto.set = function(propertyName, value) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "value":
			this.properties["value"] = value;
			return true;
			break;
		case "header":
			this.properties["header"] = value;
			return true;
			break;
		case "content":
			this.content.set(propertyName, value);
			return true;
			break;
		default:
			return _parent.set.call(this, propertyName, value);
			break;
	}
};

_proto.get = function(propertyName) {
	switch(propertyName.trim().toLowerCase()) {
		case "value":
			return this.properties["value"];
			break;
		case "header":
			return this.properties["header"];
			break;
		case "content":
			return this.content.get["content"];
			break;
		default:
			return _parent.get.call(this, propertyName);
			break;
	}
};

_proto.render = function() {
	var concat = "_labelContainer";
	var header = this.get("header");
	var value = this.get("value");
	var content = this.get("content");
	var className = this.get("className");
	var identifier = this.get("identifier");
	
	wormHelper.writeResponse("<div class='" + className + concat + "' id='" + identifier + concat + "'>");
	wormHelper.writeResponse("<" + header + " class='" + className + "' id='" + identifier + "'>" + value + "</" + header + ">");
	this.content.render();
	wormHelper.writeResponse("</div>");
}

module.exports = label;