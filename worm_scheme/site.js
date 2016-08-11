
var _parent = wormHelper.refreshModule("./worm_scheme/propertyEntity.js").prototype,
	_proto = site.prototype = Object.create(_parent);

_proto.constructor = site;

function site() {
	_parent.constructor.apply(this);
	
	this.properties["contentBuffer"] = '';
	this.properties["urlRefreshOrdinal"] = null;
}

_proto.jsBundler = function(index, path) {
	wormHelper.jsBundle[index] = path;
}

_proto.renderJSBundle = function() {
	var jsBundle = wormHelper.jsBundle;
	var response = this.properties.response;
	
	for (var index in jsBundle) {
		response.write("<script type='text/javascript' src='" + index + "'></script>");
	}
}

_proto.cssBundler = function(index, path) {
	wormHelper.cssBundle[index] = path;
}

_proto.renderCSSBundle = function() {
	var cssBundle = wormHelper.cssBundle;
	var response = this.properties.response;
	
	for (var index in cssBundle) {
		response.write("<link rel='stylesheet' type='text/css' href='" + index + "'></link>");
	}
}

_proto.JPEGBundler = function(index, path) {
	wormHelper.imageBundle[index] = path;
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
		case "response":
			this.properties["response"] = value;
			return true;
		case "errorpagepath":
			this.properties["errorPagePath"] = value;
			return true;
		case "ispartialload":
			this.properties["isPartialLoad"] = value;
			return true;
		case "urlmap":
			var explodeUrl = this.splitAndGroom(value, "/");
			this.properties["urlMap"] = this.splitAndGroom(explodeUrl[0], "-");
			return true;
		case "contentbuffer":
			this.properties["contentBuffer"] = value;
			return true;
		case "pageviewername":
			this.properties["pageViewerName"] = value;
			return true;
		case "urlrefreshordinal":
			this.properties["urlRefreshOrdinal"] = value;
			return true;
		default:
			return _parent.set.call(this, propertyName, value);
	}
};

_proto.get = function(propertyName) {
	switch(propertyName.trim().toLowerCase()) {
		case "request":
			return this.properties["request"];
		case "response":
			return this.properties["response"];
		case "requesturl":
			return this.properties["requestUrl"];
		case "urlmap":
			return this.properties["urlMap"];
		case "queryparameters":
			return this.properties["queryParameters"];
		case "errorpagepath":
			return this.properties["errorPagePath"];
		case "ispartialload":
			return this.properties["isPartialLoad"];
		case "contentbuffer":
			return this.properties["contentBuffer"];
		case "pageviewername":
			return this.properties["pageViewerName"];
		case "urlrefreshordinal":
			return this.properties["urlRefreshOrdinal"]
		default:
			return _parent.get.call(this, propertyName, value);
	}
};

_proto.render = function(page) {
	var prop = this.properties;
	var res = prop.response;
	
	page.createElements();
	page.preRender();
	
	if (!prop.isPartialLoad) {
		
		res.write("<!DOCTYPE html>");
		res.write("<html>");
		res.write("<head>");
		res.write("<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />");
	
		this.renderJSBundle();
		this.renderCSSBundle();
	
		res.write("</head>");
		res.write("<body>");
	}
	
	page.render();
	page.postRender();
	
	if (!prop.isPartialLoad){
		res.write("</body>");
		res.end("</html>");
	}
}

module.exports = site;
