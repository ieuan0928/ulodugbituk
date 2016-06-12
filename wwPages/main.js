var _parent = wormHelper.refreshModule('./worm_scheme/ui_elements/pageBase.js').prototype,
	_proto = main.prototype = Object.create(_parent);
	
var pageViewer = wormHelper.refreshModule('./worm_scheme/ui_elements/pageViewer.js');
var linkButton = wormHelper.refreshModule("./worm_scheme/ui_elements/linkButton.js");

_proto.constructor = main;

function main() {
	_parent.constructor.apply(this);
	
	this.pageViewer1 = new pageViewer();
	this.linkButton1 = new linkButton();
	this.linkButton2 = new linkButton();
}

_proto.createElements = function() {
	this.linkButton1.set("parent", this);
	this.linkButton2.set("parent", this);
	this.pageViewer1.set("parent", this);

	
	this.linkButton1.set("content", "home");
	this.linkButton2.set("content", "stores");
	
};


module.exports = main;