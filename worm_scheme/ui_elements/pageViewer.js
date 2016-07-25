var _parent = wormHelper.refreshModule('./worm_scheme/ui_elements/controlBase.js').prototype,
	_proto = pageViewer.prototype = Object.create(_parent);
	
_proto.constructor = pageViewer;

function pageViewer() {
	_parent.constructor.apply(this);

	this.properties["mustRenderContainer"] = true;
}

_proto.nextUrlParameter = '';
_proto.myValue = '';
_proto.pageObject = null;

_proto.get = function(propertyName) {
	switch (propertyName.trim().toLowerCase()) {
		case "map":
			return this.properties["map"];
		case "urlmap":
			return this.properties["urlMap"];
		case "mustrendercontainer":
			return this.properties["mustRenderContainer"];
		default:
			return _parent.get.call(this, propertyName);
	}
}

_proto.set = function(propertyName, value) {
	switch (propertyName.trim().toLowerCase()) {
		case "map":
			this.properties["map"] = value;
			return true;
		case "urlmap":
			this.properties["urlMap"] = value;
			return true;
		case "mustrendercontainer":
			this.properties["mustRenderContainer"] = value;
			return true;
		default:
			return _parent.set.call(this, propertyName, value);
	}
}

_proto.preRender = function() {
	_parent.preRender.call(this);

	var myMap = this.properties.map;
	var urlMap = this.properties.urlMap;
	var pageType = null;
	
	if (urlMap.length == 0) {
		pageType = wormHelper.refreshModule(myMap.childMap[myMap.defaultKey].modulePage);
		this.pageObject = new pageType();
		this.pageObject.createElements();
	}
	else {
		
		var urlLower = urlMap[0].toLowerCase();
		if (urlLower in myMap.childMap) {
			var map = myMap.childMap[urlLower];
			pageType = wormHelper.refreshModule(map.modulePage);

			this.pageObject = new pageType();
			this.pageObject.createElements();
						
			if ('child' in map) {
				var childPageViewer = pageObject[map.pageViewerName];
				childPageViewer.set("map", map.child);
				
				urlMap.splice(0, 1);
				childPageViewer.set("urlMap", urlMap);
			}
		}
		else {
			pageType = wormHelper.refreshModule(wormHelper.site.properties.errorPagePath);
			this.pageObject = new pageType();
			this.pageObject.createElements();
		}
	}

	this.pageObject.preRender();
}

_proto.render = function() {
	var response = wormHelper.site.properties.response;
	var mustRenderContainer = this.properties["mustRenderContainer"];
	if (mustRenderContainer) wormHelper.writeResponse("<div id='" + this.properties.identifier + "'>");
	
	this.pageObject.render();
	
	
	if (mustRenderContainer) wormHelper.writeResponse("</div>");
}

_proto.postRender = function() {
	this.pageObject.postRender();

	_parent.postRender.call(this);
}

module.exports = pageViewer;


