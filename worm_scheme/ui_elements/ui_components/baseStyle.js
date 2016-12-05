var _parent = wormHelper.refreshModule("./worm_scheme/propertyEntity.js").prototype,
    _proto = baseStyle.prototype = Object.create(_parent);

_proto.constructor = baseStyle;

function baseStyle() {
    _parent.constructor.apply(this);

    this.properties.hasStyle = false;
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
        case "hasstyle":
            return this.properties["hasStyle"];
        case "allhasstyle":
            return (this.properties["top"] && 
                this.properties["right"] && 
                this.properties["bottom"] &&
                this.properties["left"]);
        default:
            return _parent.get.call(this, propertyName);
    }
}

_proto.set = function(propertyName, value) {
    switch (propertyName.trim().toLowerCase()) {
        case "top":
            this.properties["top"] = value;
            this.properties.hasStyle = true;
            return true;
        case "right":
            this.properties["right"] = value;
            this.properties.hasStyle = true;
            return true;
        case "bottom":
            this.properties["bottom"] = value;
            this.properties.hasStyle = true;
            return true;
        case "left":
            this.properties["left"] = value;
            this.properties.hasStyle = true;
            return true;
        default:
            return _parent.set.call(this, propertyName, value);
    }
}

module.exports = baseStyle;