var _parent = wormHelper.refreshModule("./worm_scheme/indexBase.js").prototype,
	_proto = wormIndex.prototype = Object.create(_parent);


function wormIndex() {
	_parent.constructor.apply(this);
}

module.exports = wormIndex;