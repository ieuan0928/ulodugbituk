var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/controlBase.js").prototype,
	_proto = linkButton.prototype = Object.create(_parent);
	
_proto.constructor = linkButton;

var contentControl = wormHelper.refreshModule("./worm_scheme/ui_elements/contentControl.js");
var pageViewer = wormHelper.refreshModule("./worm_scheme/ui_elements/pageViewer.js");

function linkButton() {
	_parent.constructor.apply(this);
	
	wormHelper.site.jsBundler("/ws_js/luh.js", "./worm_scheme/js/linkUrlHelper.js")
	
	this.properties["content"] = new contentControl();
	this.properties["pageViewer"] = null;
}

_proto.get = function(propertyName) {
	switch (propertyName.trim().toLowerCase()) {
		case "content":
			return this.properties.content.get("content");
			break;
		case "pageviewer":
			return this.properties["pageViewer"];
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
		case  "pageviewer":
			if (value.constructor.name == pageViewer.prototype.constructor.name) {
				this.properties["pageViewer"] = value;
				return true;
			}
			else {
				throw ("Invalid Type!!!");
			}
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
	
	response.write("</a>");
}

module.exports = linkButton;