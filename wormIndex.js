
var _proto = wormIndex.prototype;

function wormIndex() {}

_proto.render = function() {
	var home = wormHelper.refreshModule("./wwPages/Home.js");
	wormHelper.site.render(new home());
};

module.exports = wormIndex;