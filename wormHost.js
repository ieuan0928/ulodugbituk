wormHelper = {
	site: null,
	siteMap: [],
	jsBundle: null,
	cssBundle: null,
	refreshModule : function(path) {
		var resolvePath = require.resolve(path);
		delete require.cache[resolvePath];
		return require(resolvePath);
	},
	getSite : function(request, response) {
		var siteModule = wormHelper.refreshModule("./worm_scheme/site.js");
		var wormIndex = wormHelper.refreshModule("./wormIndex.js");
		
		wormHelper.site = new siteModule();
		wormHelper.site.set("response", response);
		wormHelper.site.set("request", request);
		
		response.writeHead(200, {'Content-Type': 'text/html'});
		
		new wormIndex().render();
	},
	getJS: function(request, response) {
		var resolvePath = require.resolve(wormHelper.jsBundle[request.url]);
		var fs = require('fs');
		
		fs.readFile(resolvePath, function(err, data) {
			if (!err) {
				response.setHeader("Content-type", "text/javascript");
				response.end(data);
			}
			else response.end("// javascript is not available...");
		});	
	},
	getCSS: function(request, response) {
		
	},
	getImage: function(request, response) {
		
	}
}



var express = require("express");
	app = express(),
	server = require("http").createServer(app);
	
app.use(express.static(__dirname + '/sample_images'));

server.listen(3000);

app.get("/*.js", wormHelper.getJS);
app.get("/*", wormHelper.getSite);

app.get("/*.css", wormHelper.getCSS);


