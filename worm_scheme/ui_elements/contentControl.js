
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/controlBase.js").prototype,
	_proto = contentControl.prototype = Object.create(_parent);
	
var panel = wormHelper.refreshModule("./worm_scheme/ui_elements/panel.js");

_proto.constructor = contentControl;
_proto.panel1 = null;

function contentControl() {
	_parent.constructor.apply(this);
	
	var default_class = "content_Default_Class";
	this.set("className", default_class);
}

var panelId = '_defaultContent';

_proto.set = function(propertyName, value) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "content":
			if(value !== null && typeof value === 'object')
			{
				this.properties["content"] = null;
				this.properties["contentPanel"] = new panel();
				this.properties["contentPanel"].addControl(value);
			}
			else
			{
				this.properties["contentPanel"] = null;
				this.properties["content"] = value;
			}
			return true;
		default:
			return _parent.set.call(this, propertyName, value);
	}
};

_proto.get = function(propertyName) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "content":
			if(this.panel1 === null) return this.properties["content"];
			else return this.panel1;	
		default:
			return _parent.get.call(this, propertyName);
	}
};

_proto.preRender = function() {
	
	if(this.properties["contentPanel"] !== null)
	{
		var Id = "";
		var className = "";
		
		var childProp = this.properties["contentPanel"].properties.childControls[0].properties;
		
		var Id = childProp.identifier;
		var className = this.properties["contentPanel"].properties.childControls[0].get("className");
		
		this.properties["contentPanel"].set("identifier", Id + panelId);
		this.properties["contentPanel"].set("className", className + panelId);
	}
}

_proto.render = function() {
	this.preRender();
	
	if(this.properties.contentPanel == null) wormHelper.writeResponse(this.properties["content"]);
	else this.properties.contentPanel.render();
}

module.exports = contentControl;