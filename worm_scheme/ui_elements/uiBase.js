

var _parent = wormHelper.refreshModule("./worm_scheme/renderBase.js").prototype,
	_proto = uiBase.prototype = Object.create(_parent);
	
_proto.constructor = uiBase;

function uiBase() {
	_parent.constructor.apply(this);
}

_proto.set = function(propertyName, value) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "inlinereadyscripts":
			this.properties["inlineReadyScripts"] = value;
			return true;
		default:
			return _parent.set.call(this, propertyName, value);
	}
};

_proto.get = function(propertyName) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "inlinereadyscripts":
			return this.properties["inlineReadyScripts"];
		default:
			return _parent.get.call(this, propertyName);
	}
};

module.exports = uiBase;
