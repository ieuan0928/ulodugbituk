
var _proto = propertyEntity.prototype;

_proto.constructor = propertyEntity;

function propertyEntity() {
	this.properties = [];
};

_proto.properties = null;

_proto.get = function(propertyName) {
	throw new Error("Unable to idenfity the Property.");
};

_proto.set = function(propertyName, value) {
	throw new Error("Unable to idenfity the Property.");
};


module.exports = propertyEntity;