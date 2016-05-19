var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/pageBase.js").prototype,
	_proto = home.prototype = Object.create(_parent);

_proto.constructor = home;
function home(site) {
	_parent.constructor.apply(this, arguments);
}

_proto.render = function() {
	this.site.response.write("test");
}

module.exports = home;