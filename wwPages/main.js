var _parent = wormHelper.refreshModule('./worm_scheme/ui_elements/pageBase.js').prototype,
	_proto = main.prototype = Object.create(_parent);
	
_proto.constructor = main;

function main() {
	_parent.constructor.apply(this);
}

var pageViewer = wormHelper.refreshModule('./worm_scheme/ui_elements/pageViewer.js');
_proto.pageViewer1 = new pageViewer();

_proto.createElements = function() {
	this.pageViewer1.set("parent", this);
};


module.exports = main;