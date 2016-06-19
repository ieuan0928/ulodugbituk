var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/controlBase.js").prototype,
	_proto = linkButton.prototype = Object.create(_parent);
	
_proto.constructor = linkButton;

_proto.linkTypeEnumaration = Object.freeze({
	SiteMap : 0,
	ExtenalLink : 1
});

var contentControl = wormHelper.refreshModule("./worm_scheme/ui_elements/contentControl.js");
var pageViewer = wormHelper.refreshModule("./worm_scheme/ui_elements/pageViewer.js");

function linkButton() {
	_parent.constructor.apply(this);
	
	this.properties["content"] = new contentControl();
	this.properties["pageViewer"] = null;
	this.properties["linkType"] = 0;
}

_proto.get = function(propertyName) {
	switch (propertyName.trim().toLowerCase()) {
		case "content":
			return this.properties.content.get("content");
			break;
		case "hypertextreference":
			return this.properties["hyperTextReference"];
			break;
		case "linktype":
			return this.properties["linkType"];
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
		case "linktype":
			this.properties["linkType"] = value;
			return true;
			break;
		case "hypertextreference":
			this.properties["hyperTextReference"] = value;
			return true;
			break;
		default:
			return _parent.set.call(this, propertyName, value);
			break;
	}
}

_proto.preRender = function() {
	if (this.properties.linkType == _proto.linkTypeEnumaration.SiteMap) {
		wormHelper.site.jsBundler("/ws_js/luh.js", "./worm_scheme/js/linkUrlHelper.js");
	}
}

_proto.render = function() {
	var response = wormHelper.site.properties.response;
	
	response.write("<a id='" + this.properties.identifier + "' href='" + this.properties.hyperTextReference + "'><div>");
	
	this.properties.content.render();
	
	response.write("</div></a>");
}

_proto.postRender = function() {
	if (this.properties.linkType == _proto.linkTypeEnumaration.SiteMap) {
		var response = wormHelper.site.properties.response;
	
		response.write("<script>");
	    response.write("$('#" + this.properties.identifier + "').asyncSiteMapLink()");
		response.write("</script>");
	}
}

module.exports = linkButton;