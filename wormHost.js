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
		var bundle = wormHelper.jsBundle;
		
		if (bundle == null) {
			response.end("// javascript is not available...");
			return false;
		}
		
		if (!(request.url in bundle)) {
			response.end("// javascript is not available...");
			return false;
		}
		
		var resolvePath = require.resolve(bundle[request.url]);
		var fs = require('fs');
		
		fs.readFile(resolvePath, function(err, data) {
			if (!err) {
				response.setHeader("Content-type", "text/javascript");
				response.end(data);
			}
			else {
				response.end("// javascript is not available...");
				return false;
			}
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


