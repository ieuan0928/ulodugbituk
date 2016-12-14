var _parent = wormHelper.refreshModule("./worm_scheme/renderBase.js").prototype,
    _proto = anchorStyle.prototype = Object.create(_parent);

_proto.constructor = anchorStyle;

function anchorStyle() {
    _parent.constructor.apply(this);
}

_proto.get = function(propertyName) {
    switch (propertyName.trim().toLowerCase()) {
        case "top":
            return this.properties["top"];
        case "right":
            return this.properties["right"];
        case "bottom":
            return this.properties["bottom"];
        case "left":
            return this.properties["left"];
        default:
            return _parent.get.call(this, propertyName);
    }
}

_proto.set = function(propertyName, value) {
    switch (propertyName.trim().toLowerCase()) {
        case "top":
            this.properties["top"] = value;
            return true;
        case "right":
            this.properties["right"] = value;
            return true;
        case "bottom":
            this.properties["bottom"] = value;
            return true;
        case "left":
            this.properties["left"] = value;
            return true;
        default:
            return _parent.set.call(this, propertyName, value);
    }
}

module.exports = anchorStyle;