
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/lookAndFeel.js").prototype,
	_proto = lookAndFeelSameClass.prototype = Object.create(_parent);

var _proto = lookAndFeelSameClass.prototype;

_proto.constructor = lookAndFeelSameClass;
_proto.inputBox = null;
_proto.image = null;

function lookAndFeelSameClass() {
	_parent.constructor.apply(this, arguments);
};

_proto.set = function(propertyName, value) {
	_parent.set.call(this, propertyName, value);
};

module.exports = lookAndFeelSameClass;