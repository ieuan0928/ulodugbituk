
var _proto = wormIndex.prototype;
var siteMap = wormHelper.refreshModule("./siteMap.js");

function wormIndex() {}

_proto.render = function() {
	var request = wormHelper.site.properties.request;
	
	if (wormHelper.site.properties.isPartialLoad) {
		console.log(request.body.urlMap);
	}
	
	var pageType = wormHelper.refreshModule(siteMap.modulePage);
	var pageObject = new pageType();
	wormHelper.site.set("errorPagePath", siteMap.errorModulePage)
	if ("pageViewerName" in siteMap) {
		var pageViewer = pageObject[siteMap.pageViewerName];
		
		pageViewer.set("map", siteMap.child);
		pageViewer.set("urlMap", wormHelper.site.properties.urlMap);
	}
	wormHelper.site.render(pageObject);
};

module.exports = wormIndex;