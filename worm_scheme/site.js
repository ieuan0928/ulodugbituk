
var site = function site() {
	
	function ImportModule(path) {
		var resolvePath = require.resolve(path);
		
		delete.require.cache[resolvePath];
		
		return require(resolvePath);
	}
};

site.instance = null;

site.getInstance = function() {
	if (this.instance == null) this.instance = new site();
	return this.instance;
}

module.exports = site.getInstance();

