var express = require("express");
	app = express(),
	server = require("http").createServer(app);

var site = require("./worm_scheme/site.js");
console.log(site);
server.listen(3000);

app.get("/", function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	
	var wormIndex = site.ImportModule("./wormIndex.js");
	var wi = new wormIndex();
	
	wi.Site = site;
	wi.Request = request;
	wi.Response = response;
	wi.Start();
	
	response.end();
});