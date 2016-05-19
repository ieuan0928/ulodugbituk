var _proto = controlBase.prototype;

_proto.constructor = controlBase;
function controlBase(site) {
	this.site = site;
}

_proto.site = null;
_proto.parentControl = null;
_proto.name = "";
_proto.className = "";

_proto.render = function() {};
_proto.preRender = function() {};
_proto.postRender = function() {};

module.exports = controlBase;