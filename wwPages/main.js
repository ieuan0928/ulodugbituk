var _parent = wormHelper.refreshModule('./worm_scheme/ui_elements/pageBase.js').prototype,
	_proto = main.prototype = Object.create(_parent);
	
var pageViewer = wormHelper.refreshModule('./worm_scheme/ui_elements/pageViewer.js');

_proto.constructor = main;

function main() {
	_parent.constructor.apply(this);
	
	this.pageViewer1 = new pageViewer();
}

_proto.pageViewer1 = null;

_proto.createElements = function() {
	this.pageViewer1.set("parent", this);
};


module.exports = main;