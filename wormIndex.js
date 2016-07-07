
var _proto = wormIndex.prototype;
var siteMap = wormHelper.refreshModule("./siteMap.js");

function wormIndex() {}

_proto.render = function() {
	var site = wormHelper.site;
	var siteProp = site.properties;
	var request = siteProp.request;

	if (siteProp.isPartialLoad) {
		//for ()
	}
	else {
	
		var pageType = wormHelper.refreshModule(siteMap.modulePage);
		var pageObject = new pageType();
		site.set("errorPagePath", siteMap.errorModulePage)
		if ("pageViewerName" in siteMap) {
			var pageViewer = pageObject[siteMap.pageViewerName];
		
			pageViewer.set("map", siteMap.child);
			pageViewer.set("urlMap", siteProp.urlMap);
		}
		site.render(pageObject);
	}
};

module.exports = wormIndex;