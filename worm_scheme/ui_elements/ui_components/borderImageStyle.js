var _parent = wormHelper.refreshModule("./worm_scheme/renderBase.js").prototype,
    _proto = borderImageStyle.prototype = Object.create(_parent);

_proto.constructor = borderImageStyle;

function borderImageStyle() {
    _parent.constructor.apply(this);
}

_proto.get = function(propertyName) {
    switch (propertyName.trim().toLowerCase()) {
        case "source":
            return this.properties["source"];
        case "slice":
            return this.properties["slice"];
        case "width":
            return this.properties["width"];
        case "outset":
            return this.properties["outset"];
        case "repeat":
            return this.properties["repeat"];
        default:
            return _parent.get.call(this, propertyName);
    }
}

_proto.set = function(propertyName, value) {
    switch (propertyName.trim().toLowerCase()) {
        case "source":
            this.properties["source"] = value;
            return true;
        case "slice":
            this.properties["slice"] = value;
            return true;
        case "width":
            this.properties["width"] = value;
            return true;
        case "outset":
            this.properties["outset"] = value;
            return true;
        case "repeat":
            this.properties["repeat"] = value;
            return true;
        default:
            return _parent.set.call(this, propertyName, value);
    }
}

module.exports = borderImageStyle;