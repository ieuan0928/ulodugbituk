wormHelper = {
	site: null,
	siteMap: [],
	refreshModule : function(path) {
		var resolvePath = require.resolve(path);
		delete require.cache[resolvePath];
		return require(resolvePath);
	},
	getSite : function(request, response) {
		var siteModule = wormHelper.refreshModule("./worm_scheme/site.js");
		console.log("niagi");
		wormHelper.site = new siteModule();
		var wormIndex = wormHelper.refreshModule("./wormIndex.js");
		wormHelper.site.set("response", response);
		wormHelper.site.set("request", request);
		response.writeHead(200, {'Content-Type': 'text/html'});
		new wormIndex().render();
	},
	getJS: function(request, response) {
		response.end("to do...");
	},
	getCSS: function(request, response) {
		
	}
}

var express = require("express");
	app = express(),
	server = require("http").createServer(app);

server.listen(3000);

app.get("/", wormHelper.getSite);

app.get("/index.html", wormHelper.getSite);
app.get("/*.js", wormHelper.getJS);
app.get("/*.css", wormHelper.getCSS);

app.get("/**/", function(req, res) {
	var url = require("url");
	
	var parsedUrl = url.parse(req.url);
	console.log(req.route.path);
	res.end(req.route.path);
});



