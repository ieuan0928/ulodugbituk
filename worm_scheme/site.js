
var _proto = site.prototype;

function site() {}

_proto.request = null;
_proto.response = null;
_proto.instance = null;

_proto.render = function(page) {
	var res = this.response;
	
	res.write("<!DOCTYPE html>");
	res.write("<html>");
	res.write("<head>");
	res.write("<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js '></script>");
	res.write("<script src='alerttest.js'></script>");
	res.write("<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />");
	res.write("</head>");
	res.write("<body>");
	
	page.render();
	
	res.write("</body>");
	res.end("</html>");
}

site.getInstance = function() {
	if (this.instance == null) this.instance = new site();
	return this.instance;
}

module.exports = site.getInstance();
