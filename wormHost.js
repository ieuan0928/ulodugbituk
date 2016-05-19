wormHelper = {
	refreshModule : function(path) {
		var resolvePath = require.resolve(path);
		delete require.cache[resolvePath];
		return require(resolvePath);
	},
	getSite : function(request, response) {
		var site = wormHelper.refreshModule("./worm_scheme/site.js");
		var wormIndex = wormHelper.refreshModule("./wormIndex.js");
		site.request = request;
		site.response = response;
		response.writeHead(200, {'Content-Type': 'text/html'});
		new wormIndex(site).render();
	},
	getJS: function(request, response) {
		console.log("test");
		response.write("$(document).ready(function() {");
		response.write("alert('bullshit')");
		response.write("});")
		response.end("// test runtime");
		
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



