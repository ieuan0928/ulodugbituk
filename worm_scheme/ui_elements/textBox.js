
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/controlBase.js").prototype,
	_proto = textBox.prototype = Object.create(_parent);
	
_proto.constructor = textBox;	
	
function textBox() {
	_parent.constructor.apply(this, arguments);
}

_proto.set = function(propertyName, value) {
	
	switch(propertyName.trim()toLowerCase()) {
		case "isMultiline":
			this.properties[propertyName] = value;
			break;
		case "value":
			this.properties[propertyName] = value;
			break;
		case "placeholder":
			this.properties[propertyName] = value;
			break;
		default:
			return _parent.set(propertyName, value);
			break;
	}
};

_proto.get = function(propertyName) {
	
	switch(propertyName.trim()toLowerCase()) {
		case "isMultiline":
			return this.properties["isMultiline"];
			break;
		case "value":
			return this.properties["value"];
			break;
		case "placeholder":
			return this.properties["placeholder"];
			break;
		default:
			return _parent.set(propertyName, value);
			break;
	}
};

_proto.render = function() {
	var res = wormHelper.site.get("response");
	
	var isMultiline = this.get("");
	
	switch(this.properties["isMultiline"]) {
		case true:
			res.write("");
			break;
		case false:
			this.properties[propertyName] = value;
			break;
		default:
			return true;
			break;
	}
}

module.exports = textBox;