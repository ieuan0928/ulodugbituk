var _proto = Animal.prototype;

function Animal(age) { 
    this._age = age; 
} 

_proto.testProperty1 = "test";
_proto.getAge = function() { 
    return this._age; 
}; 

module.exports = Animal;