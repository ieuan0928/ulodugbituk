
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/controlBase.js").prototype,
	_proto = textBox.prototype = Object.create(_parent);
	
_proto.constructor = textBox;	
	
function textBox() {
	_parent.constructor.apply(this);
}

_proto.set = function(propertyName, value) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "ismultiline":
			this.properties[propertyName] = value;
			break;
		case "value":
			this.properties[propertyName] = value;
			break;
		case "placeholder":
			this.properties[propertyName] = value;
			break;
		default:
			return _parent.set.call(this, propertyName, value);
			break;
	}
};

_proto.get = function(propertyName) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "ismultiline":
			return this.properties["ismultiline"];
			break;
		case "value":
			return this.properties["value"];
			break;
		case "placeholder":
			return this.properties["placeholder"];
			break;
		default:
			return _parent.get.call(this, propertyName);
			break;
	}
};

_proto.render = function() {
	var res = wormHelper.site.get("response");
	
	var isMultiline = this.get("ismultiline");
	var value = this.get("value");
	var placeholder = this.get("placeholder");
	
	console.log(isMultiline);
	
	switch(isMultiline) {
		case true:
			var concat = "_textArea_container";
		
			res.write("<div>");
			res.write("<textarea></textarea>");
			res.write("</div>");
			break;
		case false:
			var concat = "_textArea_container";
		
			res.write("<div>");
			res.write("<input type='text'></input>");
			res.write("</div>");
			break;
		default:
			return true;
			break;
	}
}

_proto.preRender = function() {};
_proto.postRender = function() {};

module.exports = textBox;