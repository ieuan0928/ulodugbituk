var _parent = wormHelper.refreshModule("./worm_scheme/propertyEntity.js").prototype,
    _proto = rowDefinition.prototype = Object.create(_parent);

_proto.constructor = rowDefinition;

function rowDefinition() { 
    _parent.constructor.apply(this);
}

_proto.get = function(propertyName) {
    switch (propertyName.trim().toLowerCase()) {
        case "height": 
            return this.properties["height"]; 
        case "minheight": 
            return this.properties["minHeight"];
        case "maxheight": 
            return this.properties["maxHeight"];
        default:
            return _parent.get.call(this, propertyName);
    }    
}

_proto.set = function(propertyName, value) {
    switch (propertyName.trim().toLowerCase()) {
        case "height":
            this.properties["height"] = value;
            return true;
        case "minheight":
            this.properties["minHeight"] = value;
            return true;
        case "maxheight":
            this.properties["maxHeight"] = value;
            return true;
        default:
            return _parent.set.call(this, propertyName, value);
    }
}

module.exports = rowDefinition;