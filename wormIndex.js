
var _proto = wormIndex.prototype;

function wormIndex() {}

_proto.render = function() {
	
	var main = wormHelper.refreshModule("./wwPages/main.js");
	wormHelper.site.render(new main());
};

module.exports = wormIndex;