var _super = ppp.refreshModule("./animal.js").prototype,
	methodsad = Mouse.prototype = Object.create(_super);
	
var ikugType = ppp.refreshModule('./ikug.js');

methodsad.constructor = Mouse;

function Mouse() {
	_super.constructor.apply(this, arguments);
	
	this.ikug = new ikugType();
};

methodsad.ikug = null;

methodsad.getAge = function() {
	return "na override siya";
};
//Pointles override to show super calls
//note that for performance (e.g. inline the blow is impossible)
//you should do
//and then use this.$getAge() instead of super()

module.exports = Mouse;