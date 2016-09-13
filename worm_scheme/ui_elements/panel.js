
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/containerControl.js").prototype,
	_proto = panel.prototype = Object.create(_parent);
	
_proto.constructor = panel;

function panel() {
	_parent.constructor.apply(this);
	
	var default_class = "panel_Default_Class";
	this.set("className", default_class);
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

	var inlineStyle = this.getInlineStlye();
	//  wormHelper.writeResponse("<div id='" + this.properties.identifier + "' style='" + inlineStyle + "'>");
	wormHelper.writeResponse("<div class='" + className + "' id='" + identifier + "' style='" + inlineStyle + "' >");
	
	_parent.render.call(this);
	
	wormHelper.writeResponse("</div>");
}

module.exports = panel;