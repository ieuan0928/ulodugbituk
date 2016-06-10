wormHelper = {
	site: null,
	refreshModule : function(path) {
		var resolvePath = require.resolve(path);
		delete require.cache[resolvePath];
		return require(resolvePath);
	},
	getSite : function(request, response) {
		var siteModule = wormHelper.refreshModule("./worm_scheme/site.js");
		wormHelper.site = new siteModule();
		var wormIndex = wormHelper.refreshModule("./wormIndex.js");
		wormHelper.site.set("response", response);
		wormHelper.site.set("request", request);
		response.writeHead(200, {'Content-Type': 'text/html'});
		new wormIndex().render();
	},
	getJS: function(request, response) {
		response.end("js to do...");
	},
	getCSS: function(request, response) {
		response.end("css to do...");
	},
	getIco: function(request, response) {
		response.end("ico to do...");
	}
}
//url-structure:: /main-sub-sub-sub/criteria1-value1/criteria2-value2/criteria3-value3
var express = require("express");
	app = express(),
	server = require("http").createServer(app);

server.listen(3000);

app.get("/*.js", wormHelper.getJS);
app.get("/*.css", wormHelper.getCSS);
app.get("/*.ico", wormHelper.getIco);
app.get("/*", wormHelper.getSite);

