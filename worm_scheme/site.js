
var _parent = wormHelper.refreshModule("./worm_scheme/propertyEntity.js").prototype,
	_proto = site.prototype = Object.create(_parent);

_proto.constructor = site;

function site() {
	_parent.constructor.apply(this);
	
	wormHelper.jsBundle = [];
}

_proto.jsBundler = function(index, path) {
	wormHelper.jsBundle[index] = path;
}

_proto.renderJSBundle = function() {
	var jsBundle = wormHelper.jsBundle;
	var response = this.properties.response;
	for (var index in jsBundle) {
		response.write("<script src='" + index + "'></script>");
		
	}
}

_proto.splitAndGroom = function(stringObject, characterExplode) {
	var result = stringObject.split(characterExplode);
	for (var index in result) 
		if (result[index].trim().length == 0)
			result.splice(index, 1);
	
	return result;
} 

_proto.set = function(propertyName, value) {
	switch(propertyName.trim().toLowerCase()) {
		case "request":
			var requestUrl = value.url;
			var explodeUrl = this.splitAndGroom(requestUrl, "/");
			
			this.properties["request"] = value;
			this.properties["requestUrl"] = requestUrl;
			this.properties["urlMap"] = this.splitAndGroom(explodeUrl[0], "-");

			explodeUrl.splice(0, 1);

			this.properties["queryParameters"] = explodeUrl;
			
			return true;
			break;
		case "response":
			this.properties["response"] = value;
			return true;
			break;
		case "errorpagepath":
			this.properties["errorPagePath"] = value;
			return true;
			break;
		default:
			return _parent.set.call(this, propertyName, value);
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
		case "requesturl":
			return this.properties["requestUrl"];
			break;
		case "urlmap":
			return this.properties["urlMap"];
			break;
		case "queryparameters":
			return this.properties["queryParameters"];
			break;
		case "errorpagepath":
			return this.properties["errorPagePath"];
			break;
		default:
			return _parent.get.call(this, propertyName, value);
			break;
	}
};

_proto.render = function(page) {
	var res = this.properties.response;
	
	page.createElements();
	page.preRender();
	
	res.write("<!DOCTYPE html>");
	res.write("<html>");
	res.write("<head>");
	res.write("<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />");
	
	this.renderJSBundle();
	
	res.write("</head>");
	res.write("<body>");
	
	page.render();
	page.postRender();
	
	res.write("</body>");
	res.end("</html>");
}

module.exports = site;
