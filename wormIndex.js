
var _proto = wormIndex.prototype;

function wormIndex() {}

_proto.render = function() {
	
	var main = wormHelper.refreshModule("./wwPages/main.js");
	//wormHelper.site.render(new main());
	
	var home = wormHelper.refreshModule("./wwPages/home.js");
	wormHelper.site.render(new home());
};

module.exports = wormIndex;