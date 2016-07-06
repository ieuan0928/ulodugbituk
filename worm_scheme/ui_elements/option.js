
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/controlBase.js").prototype,
	_proto = option.prototype = Object.create(_parent);
	
var contentControl = wormHelper.refreshModule("./worm_scheme/ui_elements/contentControl.js"); 

_proto.constructor = option;

function option() {
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
	var concat = "_option_container";
	
	wormHelper.writeResponse("<div id='" + this.properties.identifier + concat + "' class='" + this.properties.className + concat + "'>");
	this.content.render();
	wormHelper.writeResponse("</div>");
}

module.exports = option;