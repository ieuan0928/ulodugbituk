var _parent = wormHelper.refreshModule("./worm_scheme/propertyEntity.js").prototype,
    _proto = backgroundStyleDefinition = Object.create(_parent);

_proto.constructor = backgroundStyleDefinition;

function backgroundStyleDefinition() {
    _parent.constructor.apply(this);
}

_proto.get = function(propertyName) {
    switch (propertyName.trim().toLowerCase()) {
        case "image":
            return this.properties["image"];
        case "positionx":
            return this.properties["positionX"];
        case "positiony":
            return this.properties["positionY"];
        case "size":
            return this.properties["size"];
        case "repeatx":
            return this.properties["repeatX"];
        case "repeaty":
            return this.properties["repeatY"];
        case "attachment":
            return this.properties["attachment"];
        case "origin":
            return this.properties["origin"];
        case "clip":
            return this.properties["clip"];
        default:
            return _parent.get.call(this, propertyName);
    }
}

_proto.set = function(propertyName, value) {
    switch (propertyName.trim().toLowerCase()) {
        case "image":
            this.properties["image"] = value;
            return true;
        case "positionx":
            this.properties["positionX"] = value;
            return true;
        case "positiony":
            this.properties["positionY"] = value;
            return true;
        case "size":
            this.properties["size"] = value;
            return true;
        case "repeatx":
            this.properties["repeatX"] = value;
            return true;
        case "repeaty":
            this.properties["repeatY"] = value;
            return true;
        case "attachment":
            this.properties["attachment"] = value;
            return true;
        case "origin":
            this.properties["origin"] = value;
            return true;
        case "clip":
            this.properties["clip"] = value;
            return true;
        default:
            return _parent.set.call(this, propertyName, value);
    }
}

module.exports = backgroundStyleDefinition;