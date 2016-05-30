var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/pageBase.js").prototype,
	_proto = home.prototype = Object.create(_parent);
	
var textBox = wormHelper.refreshModule("./worm_scheme/ui_elements/textBox.js");
	
_proto.constructor = home;

function home() {
	_parent.constructor.apply(this);
}

_proto.textBox1 = new textBox();

_proto.createElements = function() {
	
	this.textBox1.set("ismultiline", true);
	this.textBox1.set("identifier", "text_box_1_id");
	this.textBox1.set("className", "text_box_1_class");
	this.textBox1.set("name", "text_box_1_name");
	this.textBox1.set("placeholder", "text_box_1_placeholder");
	this.textBox1.set("parent", this);
}

module.exports = home;