
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/controlBase.js").prototype,
	_proto = comboBox.prototype = Object.create(_parent);
	
_proto.constructor = comboBox;

function comboBox() {
	_parent.constructor.apply(this);
	this.properties["options"] = new Array();
	
	var default_class = "combo_Box_Default_Class";
	this.set("className", default_class);
}

_proto.set = function(propertyName, value) {
	switch(propertyName.trim().toLowerCase()) {
		case "type":
			if(value.trim().toLowerCase() == "dropdown")
				this.properties["type"] = value;
			else if(value.trim().toLowerCase() == "listselection")
				this.properties["type"] = value;
			
			return true;
		case "addoption":
			this.properties["options"].push(value);
			return true;
		default:
			return _parent.set.call(this, propertyName, value);
	}
};

_proto.get = function(propertyName) {
	switch(propertyName.trim().toLowerCase()) {
		default:
			return _parent.get.call(this, propertyName);
	}
};

_proto.renderOptions = function() {
	for(var x = 0; this.properties["options"][x] !== undefined; x++)
		this.properties["options"][x].render();
	
};

_proto.render = function() {
	var concat = "_comboBox_container";
	var concatSelector = "_comboBox_selector";
	
	wormHelper.writeResponse("<style type='text/css'>");
	wormHelper.writeResponse("." + this.get("className") + "{");
	wormHelper.writeResponse("width: 200px;");
	wormHelper.writeResponse("height: 30px;");
	wormHelper.writeResponse("border: 1px solid black;");
	wormHelper.writeResponse("overflow: hidden;");
	wormHelper.writeResponse("text-align: center;");
	wormHelper.writeResponse("}");
	
	wormHelper.writeResponse("." + this.get("className") + concatSelector + "{");
	wormHelper.writeResponse("height: 28px;");
	wormHelper.writeResponse("width: 30px;");
	wormHelper.writeResponse("float: right;");
	wormHelper.writeResponse("margin: 1px 1px 1px 1px;");
	wormHelper.writeResponse("background-color: black;");
	wormHelper.writeResponse("}");
	
	wormHelper.writeResponse("." + this.get("className") + concatSelector + ":active {");
	wormHelper.writeResponse("background-color: red;");
	wormHelper.writeResponse("}");
	
	wormHelper.writeResponse("</style>");
	
	wormHelper.writeResponse("<div id='" + this.properties.identifier + concat + "' class='" + this.get("className") + concat + "'>");
	wormHelper.writeResponse("<div id='" + this.properties.identifier + "' class='" + this.get("classCollection") + "'>");
	wormHelper.writeResponse("<div id='" + this.properties.identifier + concatSelector + "' class='" + this.get("className") + concatSelector + "'></div>");
	this.renderOptions();
	wormHelper.writeResponse("</div>");
	wormHelper.writeResponse("</div>");
}

module.exports = comboBox;