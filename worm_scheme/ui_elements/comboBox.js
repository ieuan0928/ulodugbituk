
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/controlBase.js").prototype,
	_proto = comboBox.prototype = Object.create(_parent);
	
_proto.constructor = comboBox;

function comboBox() {
	_parent.constructor.apply(this);
	this.properties["options"] = [];
}

_proto.set = function(propertyName, value) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "type":
			
			if(value.trim().toLowerCase() == "dropdown")
			{
				this.properties["type"] = "";
			}
			else
			{
				this.properties["type"] = value;
			}
			
			break;
		case "option":
			this.properties["options"].push(value);
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

_proto.renderOptions = function(options) {
	var default_option = "<option value=''> -- Select an option -- </option>"; 
	var options = this.properties["options"];
	var count;
	var renderOptions;
	
	res.write(default_option);
	
	for(count in options)
	{
		renderOptions = options[count];
		res.write("<option value='" + renderOptions + "'>" + renderOptions + "</option>");
		//console.log("<option value='" + renderOptions + "'>" + renderOptions + "</option>");
	}
	
};

_proto.render = function() {
	var res = wormHelper.site.get("response");
	var concat = "_comboBox_container";
	
	res.write();
	res.write();
}

module.exports = comboBox;