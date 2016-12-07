var _parent = wormHelper.refreshModule("./worm_scheme/renderBase.js").prototype,
    _proto = borderStyleDefinition.prototype = Object.create(_parent);

_proto.constructor = borderStyleDefinition;

function borderStyleDefinition() {
    _parent.constructor.apply(this);
}

_proto.get = function(propertyName) {
    switch (propertyName.trim().toLowerCase()) {
        case "color":
            return this.properties["color"];
        case "style":
            return this.properties["style"];
        case "width":
            return this.properties["width"];
        default: 
            return _parent.get.call(this, propertyName);
    }
}

_proto.set = function(propertyName, value) {
    switch (propertyName.trim().toLowerCase()) {
        case "color":
            this.properties["color"] = value;
            return true;
        case "style":
            this.properties["style"] = value;
            return true;
        case "width":
            this.properties["width"] = value;
            return true;
        default:
            return _parent.set.call(this, propertyName);
    }
}

_proto.render = function() {
    if (this.properties["color"] && this.properties["style"] && this.properties["width"]) {
        wormHelper.writeResponse("border: " + 
            this.properties["width"]  + " " + 
            this.properties["style"] + " " +
            this.properties["color"] + ";");
    }
    else {
        if (this.properties["width"])
            wormHelper.writeResponse("border-width: " + this.properties["width"] + ";");

        if (this.properties["style"])
            wormHelper.writeResponse("border-style: " + this.properties["style"] + ";");

        if (this.properties["color"])
            wormHelper.writeResponse("border-color: " + this.properties["color"] + ";");
    }
}

module.exports = borderStyleDefinition;