var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/pageBase.js").prototype,
	_proto = error.prototype = Object.create(_parent);
	
_proto.constructor = error;

function error() {
	_parent.constructor.apply(this);
}

_proto.render = function() {
	var response = wormHelper.site.properties.response;
	
	response.write("Error Page");
}

module.exports = error;