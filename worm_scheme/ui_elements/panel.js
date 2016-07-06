
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/containerControl.js").prototype,
	_proto = panel.prototype = Object.create(_parent);
	
_proto.constructor = panel;

function panel() {
	_parent.constructor.apply(this);
}

_proto.set = function(propertyName, value) {
	return _parent.set.call(this, propertyName, value);
};

_proto.get = function(propertyName) {
	return _parent.get.call(this, propertyName);
};

_proto.render = function() {
	var className = this.get("className");
	var identifier = this.get("identifier");
	
	wormHelper.writeResponse("<div class='" + className + "' id='" + identifier + "'>");
	
	_parent.render.call(this);
	
	wormHelper.writeResponse("</div>");
}

module.exports = panel;