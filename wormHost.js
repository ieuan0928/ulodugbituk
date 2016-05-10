var express = require("express");
	app = express(),
	server = require("http").createServer(app);

var site = require("./worm_scheme/site.js");
	
server.listen(3000);

app.get("/", function(request, response) {
	
	response.end("test igit");
});