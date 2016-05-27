
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/controlBase.js").prototype,
	_proto = containerControl.prototype = Object.create(_parent);

_proto.constructor = containerControl;

function containerControl() {
	_parent.constructor.apply(this, arguments);
	
	this.properties["childControls"] = [];
}


_proto.addControl = function(child) {
	this.properties["childControls"].push(child);
}

_proto.preRender = function() {
	
}

_proto.render = function() {
	var cc = this.properties["childControls"];
	for (var index in cc) {
		var control = cc[index];
		
		control.render();
		control.postRender();
	}
}

module.exports = containerControl;