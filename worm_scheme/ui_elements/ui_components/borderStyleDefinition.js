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
        case "anchorPosition":
            return this.properties["anchorPosition"];
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
        case "anchorPosition":
            this.properties["anchorPosition"] = value;
            return true;
        default:
            return _parent.set.call(this, propertyName);
    }
}

_proto.render = function() {
    var prefix = "border";

    if (this.properties["anchorPosition"]) 
        prefix += "-" + this.properties["anchorPosition"];

    if (this.properties["color"] && this.properties["style"] && this.properties["width"]) {
        wormHelper.writeResponse(prefix +  ": " + 
            this.properties["width"]  + " " + 
            this.properties["style"] + " " +
            this.properties["color"] + ";");
    }
    else {
        if (this.properties["width"])
            wormHelper.writeResponse(prefix + "-width: " + this.properties["width"] + ";");

        if (this.properties["style"])
            wormHelper.writeResponse(prefix + "-style: " + this.properties["style"] + ";");

        if (this.properties["color"])
            wormHelper.writeResponse(prefix + "-color: " + this.properties["color"] + ";");
    }
}

module.exports = borderStyleDefinition;