var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/containerControl.js").prototype,
	_proto = home.prototype = Object.create(_parent);
	
var textBox = wormHelper.refreshModule("./worm_scheme/ui_elements/textBox.js");
	
_proto.constructor = home;

function home() {
	_parent.constructor.apply(this, arguments);
	this.initializeElements();
}

_proto.initializeElements = function() {
	
}

_proto.textBox1 = new textBox();

_proto.createElements = function() {
	
	this.textBox1.set("placeholder", "test");
	this.textBox1.set("parent", this);
}

module.exports = home;