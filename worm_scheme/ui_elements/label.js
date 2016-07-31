
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/controlBase.js").prototype,
	_proto = label.prototype = Object.create(_parent);
	
var contentControl = wormHelper.refreshModule("./worm_scheme/ui_elements/contentControl.js"); 
	
_proto.constructor = label;
_proto.content = null;

function label() {
	_parent.constructor.apply(this);
	this.content = new contentControl();
	
	var default_class = "label_Default_Class";
	this.set("className", default_class);
}

_proto.set = function(propertyName, value) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "value":
			this.properties["value"] = value;
			return true;
		case "header":
			this.properties["header"] = value;
			return true;
		case "content":
			this.content.set(propertyName, value);
			return true;
		default:
			return _parent.set.call(this, propertyName, value);
	}
};

_proto.get = function(propertyName) {
	switch(propertyName.trim().toLowerCase()) {
		case "value":
			return this.properties["value"];
		case "header":
			return this.properties["header"];
		case "content":
			return this.content.get["content"];
		default:
			return _parent.get.call(this, propertyName);
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
	wormHelper.writeResponse("<" + header + " class='" + this.get("classCollection") + "' id='" + identifier + "'>" + value + "</" + header + ">");
	this.content.render();
	wormHelper.writeResponse("</div>");
}

module.exports = label;