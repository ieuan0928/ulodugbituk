
var site = function site() {};

site.Instance = null;

site.prototype.ImportModule = function(path) {
	var resolvePath = require.resolve("../" + path);
	delete require.cache[resolvePath];
	return require(resolvePath);
}

site.getInstance = function() {
	if (this.instance == null) this.Instance = new site();
	return this.Instance;
}

module.exports = site.getInstance();
