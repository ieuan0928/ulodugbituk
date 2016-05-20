var _proto = controlBase.prototype;

_proto.constructor = controlBase;
function controlBase() {
}

_proto.parentControl = null;
_proto.name = "";
_proto.className = "";

_proto.render = function() {};
_proto.preRender = function() {};
_proto.postRender = function() {};

module.exports = controlBase;