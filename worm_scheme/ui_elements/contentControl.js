
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/controlBase.js").prototype,
	_proto = contentControl.prototype = Object.create(_parent);
	
var panel = wormHelper.refreshModule("./worm_scheme/ui_elements/panel.js");

_proto.constructor = contentControl;
_proto.panel1 = null

function contentControl() {
	_parent.constructor.apply(this);
	this.panel1 = new panel();
}

var panelId = '_defaultContent';

_proto.set = function(propertyName, value) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "content":
			if(value !== null && typeof value === 'object')
			{
				console.log(value.get("identifier"));
				this.properties["content"] = null;
				this.panel1.set("identifier", value.get("identifier") + panelId);
				this.panel1.set("className", value.get("className") + panelId);
				this.panel1.addControl(value);
			}
			else
			{
				console.log("wala panel");
				this.panel1 = null;
				this.properties["content"] = value;
			}
			return true;
			break;
		case "identifier":
			if(value !== null)
			{
				this.panel1.set("identifier", value + panelId);
			}
			else
			{
				return _parent.set.call(this, propertyName, value);
			}
			return true;
			break;
		default:
			return _parent.set.call(this, propertyName, value);
			break;
	}
};

_proto.get = function(propertyName) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "content":
			if(this.panel1 === null)
			{
				return this.properties["content"];
			}
			else
			{
				return this.panel1;
			}
			break;
		default:
			return _parent.get.call(this, propertyName);
			break;
	}
};

_proto.render = function() {
		var res = wormHelper.site.get("response");
		
		var content = this.get("content");
		
		if(this.panel1 === null)
		{
			res.write(content);
		}
		else
		{
			this.panel1.render();
		}
}

module.exports = contentControl;