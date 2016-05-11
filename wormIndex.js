var wormIndex = function() {};

wormIndex.Request = null;
wormIndex.Response = null;
wormIndex.Site = null;

wormIndex.prototype.Start = function() {
	var home = this.Site.ImportModule("./wwPages/Home.js");
};

module.exports = wormIndex;