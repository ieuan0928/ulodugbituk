
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/controlBase.js").prototype,
	_proto = checkBox.prototype = Object.create(_parent);
	
var contentControl = wormHelper.refreshModule("./worm_scheme/ui_elements/contentControl.js"); 
	
_proto.constructor = checkBox;
_proto.content = null;

function checkBox() {
	_parent.constructor.apply(this);
	this.content = new contentControl();
}

var contentId = "_defaultContent";

_proto.set = function(propertyName, value) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "value":
			this.properties["value"] = value;
			return true;
			break;
		case "content":
			this.content.set(propertyName, value);
			return true;
			break;
		case "identifier":
			this.content.set("identifier", value + contentId);
			return _parent.set.call(this, propertyName, value);
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
	var concat = "_checkBox_container";
	
	res.write("<div id='" + this.properties.identifier + concat + "' class='" + this.properties.className + concat + "'>");
	res.write("<input type='checkbox' id='" + this.properties.identifier + "' class='" + this.properties.className + "' name='" + this.properties.name + "' value='" + this.properties.value + "'></input>");
	this.content.render();
	res.write("</div>");
	
}

module.exports = checkBox;