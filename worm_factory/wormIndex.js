
var _proto = wormIndex.prototype;
var siteMap = wormHelper.refreshModule(wormHelper.domainConfig.siteMap);

function wormIndex() {}

_proto.render = function() {
	var site = wormHelper.site;
	var siteProp = site.properties;
	var request = siteProp.request;
	var urlMap = siteProp.urlMap;
	var child = siteMap.child;
	
	var pageType;
	
	site.set("errorPagePath", siteMap.errorModulePage);
	
	if (siteProp.isPartialLoad) {
		var index;
		var map;

		if (isNaN(siteProp.urlRefreshOrdinal)) index = urlMap.length - 2;
		else index = 0;
		
		if (index <= 0) {
			map = siteMap;
			site.set("pageViewerName", siteMap.pageViewerName);
			pageType = wormHelper.refreshModule(siteMap.modulePage);
		}
		else {
			map = child.childMap[urlMap[index].toLowerCase()];;
			site.set("pageViewerName", map.pageViewerName);
			pageType = wormHelper.refreshModule(map.modulePage);
			
			urlMap.splice(0, 1);
		}
		
		var responsePage = new pageType();
		
		responsePage.createElements();
		var responseViewer = responsePage[site.get("pageViewerName")];
		responseViewer.set("mustRenderContainer", false);
		responseViewer.set("map", map.child);
		responseViewer.set("urlMap", urlMap);
		
		responseViewer.preRender();
		responseViewer.render();
		responseViewer.postRender();
	}
	else {
		pageType = wormHelper.refreshModule(siteMap.modulePage);
		var pageObject = new pageType();
		
		if ("pageViewerName" in siteMap) {
			var pageViewer = pageObject[siteMap.pageViewerName];
		
			pageViewer.set("map", child);
			pageViewer.set("urlMap", urlMap);
		}
		site.render(pageObject);
	}
};

module.exports = wormIndex;