
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/controlBase.js").prototype,
	_proto = radioButton.prototype = Object.create(_parent);
	
var contentControl = wormHelper.refreshModule("./worm_scheme/ui_elements/contentControl.js"); 

_proto.constructor = radioButton;
_proto.content = null;

function radioButton() {
	_parent.constructor.apply(this);
	this.content = new contentControl();
	
	var default_class = "radio_Button_Default_Class";
	this.set("className", default_class);
}

var contentId = "_defaultContent";

_proto.set = function(propertyName, value) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "value":
			this.properties["value"] = value;
			return true;
		case "content":
			this.content.set(propertyName, value);
			return true;
		case "identifier":
			this.content.set("identifier", value + contentId);
			return _parent.set.call(this, propertyName, value);
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

_proto.render = function() {
	var concat = "_radioButton_container";
	
	wormHelper.writeResponse("<div id='" + this.properties.identifier + concat + "' class='" + this.get("className") + concat + "'>");
	wormHelper.writeResponse("<input type='radio' id='" + this.properties.identifier + "' class='" + this.get("classCollection") + "' name='" + this.properties.name + "' value='" + this.properties.value + "'></input>");
	this.content.render();
	wormHelper.writeResponse("</div>");
	
}

module.exports = radioButton;