wormHelper = {
	site: null,
	siteMap: [],
	jsBundle: null,
	cssBundle: null,
	domainConfig: null,
	
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
				siteProperties.contentBuffer += response;
				break;
			default: 
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

var encapsulateMethods = {
	createDomainConfig : function(hostHeader) {
		var wormDomains = wormHelper.refreshModule("./wormDomain.js");
		var hostNames = wormDomains.hostNames;
		var subDomainKey = '';
		

		for (var i in hostNames) {
			var hostName = "." + hostNames[i];
			if (hostHeader.indexOf(hostName) > -1) {
				subDomainKey = hostHeader.replace(hostName, "");
				break;
			}
		}

		if (subDomainKey.length == 0) subDomainKey = wormDomains.default;
		
		var subDomain = wormDomains.subDomains[subDomainKey];
		return subDomain;
	}
}

var routeMethods = {
	getSite : function(request, response) {
		wormHelper.domainConfig = createDomainConfig.spliceHostName(request.headers.host);
		var siteModule = wormHelper.refreshModule("./worm_scheme/site.js");
		var wormIndex = wormHelper.refreshModule(wormHelper.domainConfig.index);

		var isPartialLoad = Object.keys(request.body).length > 0;
		wormHelper.site = new siteModule();
		
		var site = wormHelper.site;

		site.set("isPartialLoad", isPartialLoad);
		site.set("response", response);

		if (isPartialLoad) {
			site.set("urlMap", request.body.urlMap);
			site.set("urlRefreshOrdinal", request.body.urlRefreshOrdinal);
			response.setHeader("Content-Type", "application/json");
		}
		else {
			response.writeHead(200, {'Content-Type': 'text/html'});
			site.set("request", request);
		}
		
		new wormIndex().render();
		
		if (isPartialLoad) {
			response.json({
				contentBuffer: site.get("contentBuffer"),
				pageViewerName: site.get("pageViewerName")
			});
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

	getFavIcon: function(request, response) {
		var path = require.resolve('./webWormsIcon.ico');
		var fs = require('fs');
  		var img = fs.readFileSync(path);
  		response.writeHead(200, {"Content-Type": "image/x-icon"});
  		response.end(img,'binary');
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

app.post("/favicon.ico", routeMethods.getFavIcon);
app.post("/*", routeMethods.getSite);

app.get("/favicon.ico", routeMethods.getFavIcon);
app.get("/robots.txt", routeMethods.getRobotDotText)
app.get("/*.js", routeMethods.getJS);
app.get("/*", routeMethods.getSite);

app.get("/*.css", routeMethods.getCSS);