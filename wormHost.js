wormHelper = {
	site: null,
	siteMap: [],
	jsBundle: null,
	cssBundle: null,
	
	generateUUID: function(formatString, baseNumber) {
		var d = new Date().getTime();
		var uuid = formatString.replace(/[xy]/g, function(c) {
			var r = (d + Math.random() * baseNumber) % baseNumber | 0;
			d = Math.floor(d / baseNumber);
			return (c=='x' ? r : (r&0x3|0x8)).toString(baseNumber);
		});
		return uuid;
	},
	
	refreshModule : function(path) {
		var resolvePath = require.resolve(path);
		delete require.cache[resolvePath];
		return require(resolvePath);
	},
	
	getSite : function(request, response) {
		var siteModule = wormHelper.refreshModule("./worm_scheme/site.js");
		var wormIndex = wormHelper.refreshModule("./wormIndex.js");

		wormHelper.site = new siteModule();
		
		wormHelper.site.set("isPartialLoad", Object.keys(request.body).length > 0);
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
		
	},
	
	getRobotDotText: function(request, response) {
		response.end("buhatunun pa ang robot dot text.")
	}
}



var express = require("express");
	app = express(),
	bodyParser = require('body-parser'),
	server = require("http").createServer(app);
	
app.use(express.static(__dirname + '/sample_images'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

server.listen(3000);

app.post("/", wormHelper.getSite);

app.get("/robots.txt", wormHelper.getRobotDotText)
app.get("/*.js", wormHelper.getJS);
app.get("/*", wormHelper.getSite);

app.get("/*.css", wormHelper.getCSS);



