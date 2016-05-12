var wormIndex = function(site) {
	_site = site;
};

var _site;

wormIndex.prototype.Start = function() {
	var home = _site.ImportModule("./wwPages/Home.js");
};

module.exports = wormIndex;