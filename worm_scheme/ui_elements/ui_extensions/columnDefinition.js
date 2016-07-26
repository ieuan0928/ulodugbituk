var _parent = wormHelper.refreshModule("./worm_scheme/propertyEntity.js").prototype,
    _proto = columnDefinition.prototype = Object.create(_parent);

_proto.constructor = columnDefinition;

function columnDefinition() {
    _parent.constructor.apply(this);

    this.properties["width"] = 10;
    this.properties["minWidth"] = 10;
    this.properties["maxWidth"] = 10;
}

_proto.get = function(propertyName) {
    switch (propertyName.trim().toLowerCase()) {
        case "width": 
            return this.properties["width"];
        case "minwidth": 
            return this.properties["minWidth"];
        case "maxWidth": 
            return this.properties["maxWidth"];
        default: 
            return _parent.get.call(this, propertyName);
    }
}

_proto.set = function(propertyName, value) {
    switch (propertyName.trim().toLowerCase()) {
        case "width" : 
            this.properties["width"] = value;
            return true;
        case "minwidth":
            this.properties["minWidth"] = value;
            return true;
        case "maxwidth": 
            this.properties["maxWidth"] = value;
            return true;
        default:
            return _parent.set.call(this, propertyName, value);
    }
}

module.exports = columnDefinition;



