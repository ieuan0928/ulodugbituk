var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/pageBase.js").prototype,
	_proto = searchStores.prototype = Object.create(_parent);

_proto.constructor = searchStores;	
	
function searchStores() {
	_parent.constructor.apply(this);
}

_proto.render = function() {
	var response = wormHelper.site.properties.response;
	
	response.write("search stores...");
}

module.exports = searchStores;