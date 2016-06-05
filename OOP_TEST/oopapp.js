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


var Animal = require("./mouse.js");

var mouseTest = new Animal();
var mouseTest1 = new Animal();

mouseTest.ikug.katasun = "tama tama";
mouseTest1.ikug.katasun = "taas";

console.log(mouseTest.ikug.katasun);

