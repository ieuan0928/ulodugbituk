
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/controlBase.js").prototype,
	_proto = checkBox.prototype = Object.create(_parent);
	
_proto.constructor = checkBox;

function checkBox() {
	_parent.constructor.apply(this);
}

_proto.set = function(propertyName, value) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "":
			this.properties[""] = value;
			break;
		case "":
			this.properties[""] = value;
			break;
		case "":
			this.properties[""] = value;
			break;
		default:
			return _parent.set.call(this, propertyName, value);
			break;
	}
};

_proto.get = function(propertyName) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "":
			return this.properties[""];
			break;
		case "":
			return this.properties[""];
			break;
		case "":
			return this.properties[""];
			break;
		default:
			return _parent.get.call(this, propertyName);
			break;
	}
};

_proto.render = function() {
	var res = wormHelper.site.get("response");
	
}

module.exports = textBox;