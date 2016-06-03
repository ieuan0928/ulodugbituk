
var _parent = wormHelper.refreshModule("./worm_scheme/propertyEntity.js").prototype,
	_proto = site.prototype = Object.create(_parent);

_proto.constructor = site;

function site() {
	_parent.constructor.apply(this);
}

_proto.set = function(propertyName, value) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "request":
			this.properties["request"] = value;
			break;
		case "response":
			this.properties["response"] = value;
			break;
		default:
			return _parent.set(propertyName, value);
			break;
	}
};

_proto.get = function(propertyName) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "request":
			return this.properties["request"];
			break;
		case "response":
			return this.properties["response"];
			break;
		default:
			return _parent.set(propertyName, value);
			break;
	}
};

_proto.render = function(page) {
	var res = this.get("response");
	
	page.createElements();
	
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
