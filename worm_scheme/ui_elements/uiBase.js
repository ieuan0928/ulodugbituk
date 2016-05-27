

var _parent = wormHelper.refreshModule("./worm_scheme/propertyEntity.js").prototype,
	_proto = uiBase.prototype = Object.create(_parent);
	
_proto.constructor = uiBase;

function uiBase() {
	_parent.constructor.apply(this);
}

_proto.set = function(propertyName, value) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "inlinereadyscripts":
			this.properties[propertyName] = value;
			break;
		default:
			return _parent.set.call(this, propertyName, value);
			break;
	}
};

_proto.get = function(propertyName) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "inlinereadyscripts":
			return this.properties["identifier"];
			break;
		default:
			return _parent.get.call(this, propertyName);
			break;
	}
};

_proto.render = function() {};
_proto.preRender = function() {};
_proto.postRender = function() {};

module.exports = uiBase;
