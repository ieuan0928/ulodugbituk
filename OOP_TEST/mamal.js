var _proto = mamal.prototype;

_proto.constructor = mamal;

function mamal() {
	this.putah = [];
}

_proto.putah = null;

_proto.kinsako = function() {
	console.log(this);
}

module.exports = mamal;

