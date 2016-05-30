var _parent = wormHelper.refreshModule('./worm_scheme/ui_elements/controlBase.js').prototype,
	_proto = pageViewer.prototype = Object.create(_parent);
	
_proto.constructor = pageViewer;

function pageViewer() {
	_parent.constructor.apply(this);
}

_proto.render = function() {
	var response = wormHelper.site.properties.response;
	
	response.write("tang ina u...");
}

module.exports = pageViewer;


