
var _proto = site.prototype;

function site() {}

_proto.request = null;
_proto.response = null;

_proto.render = function(page) {
	var res = this.response;
	
	res.write("<!DOCTYPE html>");
	res.write("<html>");
	res.write("<head>");
	res.write("<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />");
	res.write("</head>");
	res.write("<body>");

	page.render();
	
	res.write("</body>");
	res.end("</html>");
}

module.exports = site;
