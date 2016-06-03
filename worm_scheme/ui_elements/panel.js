
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
	var res = wormHelper.site.get("response");
	
	var className = this.get("className");
	var identifier = this.get("identifier");
	
	res.write("<div class='" + className + "' id='" + identifier + "'>");
	
	_parent.render.call(this);
	
	res.write("</div>");
}

module.exports = panel;