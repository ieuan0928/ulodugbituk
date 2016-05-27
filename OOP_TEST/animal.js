var _parent = require("./mamal.js").prototype,
	_proto = Animal.prototype = Object.create(_parent);

_proto.constructor = Animal;
function Animal() { 
    _parent.constructor.apply(this, arguments); 
} 

_proto.testProperty1 = "test";
_proto.getAge = function() { 
    return this._age; 
}; 

_proto.kinsako = function() {
	console.log(this);
}

module.exports = Animal;