
var _proto = propertyEntity.prototype;

_proto.constructor = propertyEntity;

function propertyEntity() {
	this.properties = [];
};

_proto.properties = null;

_proto.get = function(propertyName) {
	
	switch(propertyName.trim()toLowerCase()) {
		
		default:
			return null;
			break;
	}
};

_proto.set = function(propertyName, value) {
	this.properties[propertyName] = value;
};


module.exports = propertyEntity;