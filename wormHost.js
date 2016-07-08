wormHelper = {
	site: null,
	siteMap: [],
	jsBundle: null,
	cssBundle: null,
	contentBuffer : null,
	pageViewerName: null,
	
	generateUUID: function(formatString, baseNumber) {
		var d = new Date().getTime();
		var uuid = formatString.replace(/[xy]/g, function(c) {
			var r = (d + Math.random() * baseNumber) % baseNumber | 0;
			d = Math.floor(d / baseNumber);
			return (c=='x' ? r : (r&0x3|0x8)).toString(baseNumber);
		});
		return uuid;
	},
	
	writeResponse: function(response) {
		var siteProperties = wormHelper.site.properties;
		
		switch (siteProperties.isPartialLoad) {
		case true:		
			wormHelper.contentBuffer += response;
			break;
		case false: 
			siteProperties.response.write(response);
			break;
		}
	},
	
	refreshModule : function(path) {
		var resolvePath = require.resolve(path);
		delete require.cache[resolvePath];
		return require(resolvePath);
	}
}

var routeMethods = {
	getSite : function(request, response) {
		var siteModule = wormHelper.refreshModule("./worm_scheme/site.js");
		var wormIndex = wormHelper.refreshModule("./wormIndex.js");

		var isPartialLoad = Object.keys(request.body).length > 0;
		wormHelper.site = new siteModule();
		
		wormHelper.site.set("isPartialLoad", isPartialLoad);
		wormHelper.site.set("response", response);
		
		
		if (isPartialLoad) {
			wormHelper.site.set("urlMap", request.body.urlMap);
			wormHelper.contentBuffer = '';
			response.setHeader("Content-Type", "text/json");
		}
		else {
			wormHelper.site.set("request", request);
			response.writeHead(200, {'Content-Type': 'text/html'});
		}
		
		new wormIndex().render();
		
		if (isPartialLoad) {
			response.json({
				contentBuffer: wormHelper.contentBuffer,
				pageViewerName: wormHelper.pageViewerName
			});
			//wormHelper.contentBuffer = null;
		}
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
		response.end("buhatunun pa ang robot dot text.");
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

app.post("/favicon.ico", function() {});
app.post("/*", routeMethods.getSite);

app.get("/favicon.ico", function() {});
app.get("/robots.txt", routeMethods.getRobotDotText)
app.get("/*.js", routeMethods.getJS);
app.get("/*", routeMethods.getSite);

app.get("/*.css", routeMethods.getCSS);



