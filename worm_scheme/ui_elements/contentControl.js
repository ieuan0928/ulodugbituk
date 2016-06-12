
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/controlBase.js").prototype,
	_proto = contentControl.prototype = Object.create(_parent);
	
var panel = wormHelper.refreshModule("./worm_scheme/ui_elements/controlBase.js");
var panelId = '_DefaultContent';

_proto.constructor = contentControl;

function contentControl() {
	_parent.constructor.apply(this);
}

_proto.set = function(propertyName, value) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "content":
			if(value !== null && typeof value === 'object')
			{
				this.panel1 = new panel();
				this.panel1.set("identifier", this.get("identifier") + this.panelId);
				this.panel1.set("parent", value);
			}
			else
			{
				this.properties["content"] = value;
			}
			return true;
		case "identifier":
			if(value !== null)
			{
				this.panel1.set("identifier", value + this.panelId);
			}
			else
			{
				return _parent.set.call(this, propertyName, value);
			}
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
	console.log("test");
	var res = wormHelper.site.get("response");
	
	if(this.panel1 === null || this.panel1 === undefined)
	{
		res.write(this.properties.content);
	}
	else
	{
		this.panel1.render.call(this);
	}
}

module.exports = contentControl;