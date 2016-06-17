
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/controlBase.js").prototype,
	_proto = comboBox.prototype = Object.create(_parent);
	
_proto.constructor = comboBox;

function comboBox() {
	_parent.constructor.apply(this);
	this.properties["options"] = new Array();
}

_proto.set = function(propertyName, value) {
	switch(propertyName.trim().toLowerCase()) {
		case "type":
			
			if(value.trim().toLowerCase() == "dropdown")
			{
				this.properties["type"] = value;
			}
			else if(value.trim().toLowerCase() == "listselection")
			{
				this.properties["type"] = value;
			}
			return true;
			break;
		case "addoption":
			this.properties["options"].push(value);
			return true;
			break;
		default:
			return _parent.set.call(this, propertyName, value);
			break;
	}
};

_proto.get = function(propertyName) {
	switch(propertyName.trim().toLowerCase()) {
		default:
			return _parent.get.call(this, propertyName);
			break;
	}
};

_proto.renderOptions = function() {
	
	for(var x = 0; this.properties["options"][x] !== undefined; x++)
	{
		this.properties["options"][x].render();
	}
};

_proto.render = function() {
	var res = wormHelper.site.get("response");
	var concat = "_comboBox_container";
	var concatSelector = "_comboBox_selector";
	
	res.write("<style type='text/css'>");
	res.write("." + this.properties.className + "{");
	res.write("width: 200px;");
	res.write("height: 30px;");
	res.write("border: 1px solid black;");
	res.write("overflow: hidden;");
	res.write("text-align: center;");
	res.write("}");
	
	res.write("." + this.properties.className + concatSelector + "{");
	res.write("height: 28px;");
	res.write("width: 30px;");
	res.write("float: right;");
	res.write("margin: 1px 1px 1px 1px;");
	res.write("background-color: black;");
	res.write("}");
	
	res.write("." + this.properties.className + concatSelector + ":active {");
	res.write("background-color: red;");
	res.write("}");
	
	res.write("</style>");
	
	res.write("<div id='" + this.properties.identifier + concat + "' class='" + this.properties.className + concat + "'>");
	res.write("<div id='" + this.properties.identifier + "' class='" + this.properties.className + "'>");
	res.write("<div id='" + this.properties.identifier + concatSelector + "' class='" + this.properties.className + concatSelector + "'></div>");
	this.renderOptions();
	res.write("</div>");
	res.write("</div>");
}

module.exports = comboBox;