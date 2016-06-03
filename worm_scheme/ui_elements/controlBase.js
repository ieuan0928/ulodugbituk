
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/uiBase.js").prototype,
	_proto = controlBase.prototype = Object.create(_parent);

_proto.constructor = controlBase;

function controlBase() {
	_parent.constructor.apply(this, arguments);
}

_proto.set = function(propertyName, value) {
	switch(propertyName.trim().toLowerCase()) {
		case "classname":
			this.properties["className"] = value;
			break;
		case "identifier":
			this.properties["identifier"] = value;
			break;
		case "name":
			this.properties["name"] = value;
			break;
		case "parent":
			value.addControl(this);
			break;
		default:
			return _parent.set.call(this, propertyName, value);
			break;
	}
};

_proto.get = function(propertyName) {
	switch(propertyName.trim().toLowerCase()) {
		case "classname":
			return this.properties["className"];
			break;
		case "identifier":
			return this.properties["identifier"];
			break;
		case "name":
			return this.properties["name"];
			break;
		default:
			return _parent.get.call(this, propertyName);
			break;
	}
};

_proto.render = function() {};
_proto.preRender = function() {};
_proto.postRender = function() {};

module.exports = controlBase;