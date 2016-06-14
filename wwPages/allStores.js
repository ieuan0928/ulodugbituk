var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/pageBase.js").prototype,
	_proto = allStores.prototype = Object.create(_parent);

var _proto = allStores.prototype;	
	
function allStores() {
	_parent.constructor.apply(this);
}

_proto.render = function() {
	var response = wormHelper.site.properties.response;
	
	response.write("all stores..");
}

module.exports = allStores;