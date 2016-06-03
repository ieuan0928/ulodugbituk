var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/pageBase.js").prototype,
	_proto = home.prototype = Object.create(_parent);
	
var textBox = wormHelper.refreshModule("./worm_scheme/ui_elements/textBox.js");
var panel = wormHelper.refreshModule("./worm_scheme/ui_elements/panel.js"); 
	
_proto.constructor = home;

function home() {
	_parent.constructor.apply(this);
}

_proto.createElements = function() {
	
	//textbox
	_proto.textBox1 = new textBox();
	this.textBox1.set("isMultiline", false);
	this.textBox1.set("identifier", "text_box_1_id");
	this.textBox1.set("className", "text_box_1_class");
	this.textBox1.set("name", "text_box_1_name");
	this.textBox1.set("placeHolder", "text_box_1_placeholder");
	this.textBox1.set("value", "text_box_value_1");
	this.textBox1.set("parent", this);
	//textbox end
	
	//textarea
	_proto.textArea1 = new textBox();
	this.textArea1.set("isMultiline", true);
	this.textArea1.set("identifier", "text_area_1_id");
	this.textArea1.set("className", "text_area_1_class");
	this.textArea1.set("name", "text_area_1_name");
	this.textArea1.set("placeHolder", "text_area_1_placeholder");
	this.textArea1.set("value", "text_area_value_1");
	this.textArea1.set("parent", this);
	//textarea end
	
	//panel
	_proto.panel1 = new panel();
	this.panel1.set("className", "panel_1_class");
	this.panel1.set("identifier", "panel_1_id");
	this.panel1.set("parent", this);
	//panel end
	
}

module.exports = home;