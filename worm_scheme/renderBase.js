var _parent = wormHelper.refreshModule("./worm_scheme/propertyEntity.js").prototype,
    _proto = renderBase.prototype = Object.create(_parent);

function renderBase() {
    _parent.constructor.apply(this);
}

_proto.render = function() {};
_proto.preRender = function() {};
_proto.postRender = function() {};

module.exports = renderBase;