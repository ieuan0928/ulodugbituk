
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/controlBase.js").prototype,
	_proto = image.prototype = Object.create(_parent);
	
_proto.constructor = image;

function image() {
	_parent.constructor.apply(this);
	
	var default_class = "image_Default_Class";
	this.set("className", default_class);
}

_proto.set = function(propertyName, value) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "imagepath":
			this.properties["imagePath"] = value;
			return true;
		case "fakepath":
			this.properties["fakePath"] = value;
			return true;
		case "imagefiletype":
			this.properties["imageFileType"] = value;
			return true;
		default:
			return _parent.set.call(this, propertyName, value);
	}
};

_proto.get = function(propertyName) {
	switch(propertyName.trim().toLowerCase()) {
		default:
			return _parent.get.call(this, propertyName);
	}
};

_proto.preRender = function() {
	
	var imageFileType = this.properties.imageFileType;
	
	if(imageFileType !== "undefined")
	{
		switch(imageFileType.trim().toLowerCase()){
			case "jpeg":
				wormHelper.site.JPEGBundler("." + this.properties.fakePath, "." + this.properties.imagePath);
				return true;
			case "jpg":
				wormHelper.site.JPGBundler("." + this.properties.fakePath, "." + this.properties.imagePath);
				return true;
			case "png":
				wormHelper.site.PNGBundler("." + this.properties.fakePath, "." + this.properties.imagePath);
				return true;
			case "svg":
				wormHelper.site.SVGBundler("." + this.properties.fakePath, "." + this.properties.imagePath);
				return true;
			case "gif":
				wormHelper.site.GIFBundler("." + this.properties.fakePath, "." + this.properties.imagePath);
				return true;
			default:
				return true;
		}
	}
	else
	{
		return false;
	}
	
};

_proto.render = function() {
	var concat = "_image_container";
	var inlineStyle = "";
	
	var inlineStyle = this.getInlineStlye();
	
	wormHelper.writeResponse("<div id='" + this.properties.identifier + concat + "' class='" + this.get("className") + concat + "'>");
	wormHelper.writeResponse("<img style='" + inlineStyle + "' id='" + this.properties.identifier + "' class='" + this.get("classCollection") + "' src='" + this.properties.fakePath + "'></img>");
	wormHelper.writeResponse("</div>");
	
};

module.exports = image;