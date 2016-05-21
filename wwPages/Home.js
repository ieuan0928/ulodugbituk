var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/pageBase.js").prototype,
	_proto = home.prototype = Object.create(_parent);
	
_proto.constructor = home;

function home() {
	_parent.constructor.apply(this, arguments);
}

_proto.render = function() {
	//console.log(wormHelper.site.properties);
	wormHelper.site.get("response").write("test");
}

module.exports = home;