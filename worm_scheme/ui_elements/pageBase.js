
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/containerControl.js").prototype,
	_proto = pageBase.prototype = Object.create(_parent);

_proto.constructor = pageBase;

function pageBase() {
	_parent.constructor.apply(this);
	
	wormHelper.site.jsBundler("/ws_js/2.2.4/jquery.min.js", "./ww_api_libs/jquery/2.2.4/jquery.min.js");
}

_proto.createElements = function() {};


module.exports = pageBase;