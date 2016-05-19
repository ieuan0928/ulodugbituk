
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/containerControl.js").prototype,
	_proto = pageBase.prototype = Object.create(_parent);

_proto.constructor = pageBase;

function pageBase(site) {
	_parent.constructor.apply(this, arguments);
}

_proto.site = null;

module.exports = pageBase;