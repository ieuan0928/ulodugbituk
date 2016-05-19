
var _proto = wormIndex.prototype; 
function wormIndex(site) {
	this.site = site;
};

_proto.site = null;

_proto.render = function() {
	var home = wormHelper.refreshModule("./wwPages/Home.js");
	this.site.render(new home(this.site));
};

module.exports = wormIndex;