
var site = function site() {
	var property1 = "test shit";
	console.log(__dirname);
	function Display() {
		return this.property1;
	}
};

site.instance = null;

site.getInstance = function() {
	if (this.instance == null) this.instance = new site();
	return this.instance;
}

module.exports = site.getInstance();

