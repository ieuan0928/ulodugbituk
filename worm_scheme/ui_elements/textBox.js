
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/controlBase.js").prototype,
	_proto = textBox.prototype = Object.create(_parent);
	
_proto.constructor = textBox;	
	
function textBox() {
	_parent.constructor.apply(this);
}

_proto.set = function(propertyName, value) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "ismultiline":
			this.properties["isMultiline"] = value;
			break;
		case "value":
			this.properties["value"] = value;
			break;
		case "placeholder":
			this.properties["placeHolder"] = value;
			break;
		default:
			return _parent.set.call(this, propertyName, value);
			break;
	}
};

_proto.get = function(propertyName) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "ismultiline":
			return this.properties["isMultiline"];
			break;
		case "value":
			return this.properties["value"];
			break;
		case "placeholder":
			return this.properties["placeHolder"];
			break;
		default:
			return _parent.get.call(this, propertyName);
			break;
	}
};

_proto.render = function() {
	var res = wormHelper.site.get("response");
	
	var isMultiline = this.get("isMultiline");
	var value = this.get("value");
	var placeHolder = this.get("placeHolder");
	var className = this.get("className");
	var identifier = this.get("identifier");
	var name = this.get("name");
	
	switch(isMultiline) {
		case true:
			var concat = "_textAreaContainer";
		
			res.write("<div class='" + className + concat + "' id='" + identifier + "'>");
			res.write("<textarea class='" + className + "' id='" + identifier + "' name='" + name + "'>" + value + "</textarea>");
			res.write("</div>");
			break;
		case false:
			var concat = "_textBoxContainer";
		
			res.write("<div class='" + className + concat + "' id='" + identifier + "'>");
			res.write("<input type='text' class='" + className + "' id='" + identifier + "' name='" + name + "' placeholder='" + placeHolder + "' value='" + value + "'></input>");
			res.write("</div>");
			break;
		default:
			return true;
			break;
	}
}

module.exports = textBox;