var _parent = wormHelper.refreshModule("./worm_scheme/propertyEntity.js").prototype,
    _proto = gridProperty.prototype = Object.create(_parent); 

function gridProperty() {
    _parent.constructor.apply(this);

    this.properties["row"] = 0;
    this.properties["column"] = 0;
    this.properties["rowSpan"] = 1;
    this.properties["columnSpan"] = 1;
}

_proto.get = function(propertyName) {
    switch (propertyName.trim().toLowerCase()) {
        case "row":
            return this.properties["row"];
        case "column":
            return this.properties["column"];
        case "rowspan":
            return this.properties["rowSpan"];
        case "columnspan":
            return this.properties["columnSpan"];
        default:
            return _parent.get.call(this, propertyName);
    }

}

_proto.set = function(propertyName, value) {
    switch (propertyName.trim().toLowerCase()) {
        case "row":
            this.properties["row"] = value;
            return true;
        case "column":
            this.properties["column"] = value;
            return true;
        case "rowspan":
            this.properties["rowSpan"] = value;
            return true;
        case "columnspan":
            this.properties["columnSpan"] = value;
            return true;
        default:
            return _parent.set.call(this, propertyName, value);
    }
}

module.exports = gridProperty;