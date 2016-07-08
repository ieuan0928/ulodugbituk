
var _proto = wormIndex.prototype;
var siteMap = wormHelper.refreshModule("./siteMap.js");

function wormIndex() {}

_proto.render = function() {
	var site = wormHelper.site;
	var siteProp = site.properties;
	var request = siteProp.request;
	var urlMap = siteProp.urlMap;
	var child = siteMap.child;
	
	if (siteProp.isPartialLoad) {
		var index = siteProp.urlMap.length - 2;
		if (index < 0) index = 0;
		
		wormHelper.pageViewerName = (child.childMap[urlMap[urlMap.length - 2].toLowerCase()]).pageViewerName;
	}
	else {
		var pageType = wormHelper.refreshModule(siteMap.modulePage);
		var pageObject = new pageType();
		site.set("errorPagePath", siteMap.errorModulePage)
		if ("pageViewerName" in siteMap) {
			var pageViewer = pageObject[siteMap.pageViewerName];
		
			pageViewer.set("map", child);
			pageViewer.set("urlMap", urlMap);
		}
		site.render(pageObject);
	}
};

module.exports = wormIndex;