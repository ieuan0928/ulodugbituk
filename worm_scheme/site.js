
var _parent = wormHelper.refreshModule("./worm_scheme/propertyEntity.js").prototype,
	_proto = site.prototype = Object.create(_parent);

_proto.constructor = site;

function site() {
	_parent.constructor.apply(this, arguments);
}

_proto.render = function(page) {
	var res = this.get("response");
	
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
