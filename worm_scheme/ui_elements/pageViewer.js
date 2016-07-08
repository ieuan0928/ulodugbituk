var _parent = wormHelper.refreshModule('./worm_scheme/ui_elements/controlBase.js').prototype,
	_proto = pageViewer.prototype = Object.create(_parent);
	
_proto.constructor = pageViewer;

function pageViewer() {
	_parent.constructor.apply(this);
}

_proto.nextUrlParameter = '';
_proto.myValue = '';

_proto.get = function(propertyName) {
	switch (propertyName.trim().toLowerCase()) {
		case "map":
			return this.properties["map"];
			break;
		case "urlmap":
			return this.properties["urlMap"];
			break;
		default:
			return _parent.get.call(this, propertyName);
			break;
	}
}

_proto.set = function(propertyName, value) {
	switch (propertyName.trim().toLowerCase()) {
		case "map":
			this.properties["map"] = value;
			return true;
			break;
		case "urlmap":
			this.properties["urlMap"] = value;
			return true;
			break;
		default:
			return _parent.set.call(this, propertyName, value);
			break;
	}
}
_proto.render = function() {
	var response = wormHelper.site.properties.response;
	var isPartialLoad = wormHelper.site.properties.isPartialLoad;
	if (!isPartialLoad) wormHelper.writeResponse("<div id='" + this.properties.identifier + "'>");
	
	var myMap = this.properties.map;
	var urlMap = this.properties.urlMap;
	
	var pageType = null;
	var pageObject = null;
	if (urlMap.length == 0) {
		pageType = wormHelper.refreshModule(myMap.childMap[myMap.defaultKey].modulePage);
		pageObject = new pageType();
		pageObject.createElements();
	}
	else {
		
		var urlLower = urlMap[0].toLowerCase();
		if (urlLower in myMap.childMap) {
			var map = myMap.childMap[urlLower];
			pageType = wormHelper.refreshModule(map.modulePage);

			pageObject = new pageType();
			pageObject.createElements();
						
			if ('child' in map) {
				var childPageViewer = pageObject[map.pageViewerName];
				childPageViewer.set("map", map.child);
				
				urlMap.splice(0, 1);
				childPageViewer.set("urlMap", urlMap);
			}
		}
		else {
			pageType = wormHelper.refreshModule(wormHelper.site.properties.errorPagePath);
			pageObject = new pageType();
			pageObject.createElements();
		}
	}
	pageObject.preRender();
	pageObject.render();
	pageObject.postRender();
	
	if (!isPartialLoad) wormHelper.writeResponse("</div>");
}

module.exports = pageViewer;


