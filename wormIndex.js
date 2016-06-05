
var _proto = wormIndex.prototype;
var siteMap = wormHelper.refreshModule("./siteMap.js");

function wormIndex() {}

_proto.render = function() {
	var requestURL = wormHelper.site.properties.request.url;
	var pageType = wormHelper.refreshModule(siteMap.modulePage);
	var pageObject = new pageType();
	
	if ("pageViewerName" in siteMap) {
		var pageViewer = pageObject[siteMap.pageViewerName];
		
		pageViewer.set("map", siteMap.child);
		pageViewer.set("urlParameter", requestURL)
	}
	wormHelper.site.render(pageObject);
};

module.exports = wormIndex;