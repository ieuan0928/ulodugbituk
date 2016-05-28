ppp = {
	refreshModule : function(path) {
		var resolvePath = require.resolve(path);
		delete require.cache[resolvePath];
		return require(resolvePath);
	}
}

var Animal = require("./mouse.js");

var mouseTest = new Animal();

console.log(mouseTest.getAge());

console.log(mouseTest.testProperty1);

mouseTest.kinsako();