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
		case "hypertextreference":
			return this.properties["hyperTextReference"];
		case "linktype":
			return this.properties["linkType"];
		case "urlrefreshordinal":
			return this.properties["urlRefreshOrdinal"];
		default:
			return _parent.get.call(this, propertyName);
	}
}

_proto.set = function(propertyName, value) {
	switch (propertyName.trim().toLowerCase()) {
		case "content":
			this.properties.content.set("content", value);
			return true;
		case "linktype":
			this.properties["linkType"] = value;
			return true;
		case "hypertextreference":
			this.properties["hyperTextReference"] = value;
			return true;
		case "urlrefreshordinal":
			this.properties["urlRefreshOrdinal"] = value;
			return true;
		default:
			return _parent.set.call(this, propertyName, value);
	}
}

_proto.preRender = function() {
	if (this.properties.linkType == _proto.linkTypeEnumaration.SiteMap) {
		wormHelper.site.jsBundler("/ws_js/luh.js", "./worm_scheme/js/linkUrlHelper.js");
	}
	
	_parent.preRender.call(this);
}

_proto.render = function() {
	var response = wormHelper.site.properties.response;
	
	wormHelper.writeResponse("<a id='" + this.properties.identifier + "' href='" + this.properties.hyperTextReference + "'><div>");
	
	this.properties.content.render();
	
	wormHelper.writeResponse("</div></a>");
}

_proto.postRender = function() {
	if (this.properties.linkType == _proto.linkTypeEnumaration.SiteMap) {
		var response = wormHelper.site.properties.response;
	
		wormHelper.writeResponse("<script>");
	    wormHelper.writeResponse("$('#" + this.properties.identifier + "').asyncSiteMapLink({");
		var urlRefreshOrdinal = this.properties["urlRefreshOrdinal"];
		if (!isNaN(urlRefreshOrdinal)) {
			wormHelper.writeResponse("urlRefreshOrdinal: " + urlRefreshOrdinal);
		}
		wormHelper.writeResponse("})");
		
		wormHelper.writeResponse("</script>");
	}
}

module.exports = linkButton;