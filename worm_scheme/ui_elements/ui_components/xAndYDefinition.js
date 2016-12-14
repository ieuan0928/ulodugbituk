var _parent = wormHelper.refreshModule("./worm_scheme/renderBase.js").prototype,
    _proto = xAndYDefinition = Object.create(_parent);

_proto.constructor = xAndYDefinition;

function xAndYDefinition() {
    _parent.constructor.apply(this);
}

_proto.get = function(propertyName) {
    switch (propertyName.trim().toLowerCase()) {
        case "x":
            return this.properties["x"] = value;
        case "y":
            return this.properties["y"] = value;
        default:
            return _parent.get.call(this, propertyName);
    }
}

_proto.set = function(propertyName, value) {
    switch (propertyName.trim().toLowerCase()) {
        case "x":
            this.properties["x"] = value;
            return true;
        case "y":
            this.properties["y"] = value;
            return true;
        case "both":
            this.properties["x"] = value;
            this.properties["y"] = value;
            return true;
        default:
            return _parent.set.call(this, propertyName, value);
    }
}

_proto.render = function() {

}

module.exports = xAndYDefinition;