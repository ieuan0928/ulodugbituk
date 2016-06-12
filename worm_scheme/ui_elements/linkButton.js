var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/controlBase.js").prototype,
	_proto = linkButton.prototype = Object.create(_parent);
	
_proto.constructor = linkButton;

var contentControl = wormHelper.refreshModule("./worm_scheme/ui_elements/contentControl.js");

function linkButton() {
	_parent.constructor.apply(this);
	
	this.properties["content"] = new contentControl();
}

_proto.get = function(propertyName) {
	switch (propertyName.trim().toLowerCase()) {
		case "content":
			return this.properties.content.get("content");
			break;
		default:
			return _parent.get.call(this, propertyName);
			break;
	}
}

_proto.set = function(propertyName, value) {
	switch (propertyName.trim().toLowerCase()) {
		case "content":
			this.properties.content.set("content", value);
			return true;
			break;
		
		default:
			return _parent.set.call(this, propertyName, value);
			break;
	}
}

_proto.render = function() {
	var response = wormHelper.site.properties.response;
	
	response.write("<a href='#'>");
	
	this.properties.content.render();
	//console.log(this.properties.content);
	response.write("</a>");
}

module.exports = linkButton;