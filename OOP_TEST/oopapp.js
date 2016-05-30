ppp = {
	refreshModule : function(path) {
		var resolvePath = require.resolve(path);
		delete require.cache[resolvePath];
		return require(resolvePath);
	}
}

var test = {
	Property1: "Test Property",
};

test["Property2"] = "grrrr";

console.log(test.Property2);
var Animal = require("./mouse.js");

var mouseTest = new Animal();

console.log(mouseTest.getAge());

console.log(mouseTest.testProperty1);

mouseTest.kinsako();