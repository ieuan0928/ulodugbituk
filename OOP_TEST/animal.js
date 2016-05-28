var _parent = ppp.refreshModule("./mamal.js").prototype,
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
	_parent.kinsako.call(this);
}



module.exports = Animal;