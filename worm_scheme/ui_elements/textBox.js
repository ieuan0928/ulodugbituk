
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/controlBase.js").prototype,
	_proto = textBox.prototype = Object.create(_parent);
	
_proto.constructor = textBox;
	
function textBox() {
	_parent.constructor.apply(this);
	
	var default_class = "text_Box_Default_Class";
	this.set("className", default_class);
}

_proto.set = function(propertyName, value) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "ismultiline":
			this.properties["isMultiline"] = value;
			return true;
		case "value":
			this.properties["value"] = value;
			return true;		
		case "placeholder":
			this.properties["placeHolder"] = value;
			return true;
		default:
			return _parent.set.call(this, propertyName, value);
			
	}
};

_proto.get = function(propertyName) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "ismultiline":
			return this.properties["isMultiline"];
		case "value":
			return this.properties["value"];
		case "placeholder":
			return this.properties["placeHolder"];
		default:
			return _parent.get.call(this, propertyName);
	}
};

_proto.preRender = function() {
	wormHelper.site.cssBundler("./ws_css/default_text_box.css", "./styles/textBoxStylingObject.js");
	
	_parent.preRender.call(this);
}

_proto.render = function() {
	var isMultiline = this.get("isMultiline");
	var value = this.get("value");
	var placeHolder = this.get("placeHolder");
	var className = this.get("className");
	var identifier = this.get("identifier");
	var name = this.get("name");
	var inlineStyle = "";
	
	var inlineStyle = this.getInlineStlye();
	
	switch(isMultiline) {
		case true:
			var concat = "_textAreaContainer";
		
			wormHelper.writeResponse("<div class='" + className + concat + "' id='" + identifier + concat + "'>");
			wormHelper.writeResponse("<textarea style='" + inlineStyle + "' class='" + this.get("classCollection") + "' id='" + identifier + "' name='" + name + "'>" + value + "</textarea>");
			wormHelper.writeResponse("</div>");
			break;
		case false:
			var concat = "_textBoxContainer";
		
			wormHelper.writeResponse("<div class='" + className + concat + "' id='" + identifier + concat + "'>");
			wormHelper.writeResponse("<input style='" + inlineStyle + "' type='text' class='" + this.get("classCollection") + "' id='" + identifier + "' name='" + name + "' placeholder='" + placeHolder + "' value='" + value + "'></input>");
			wormHelper.writeResponse("</div>");
			break;
		default:
			return true;
	}
}

module.exports = textBox;