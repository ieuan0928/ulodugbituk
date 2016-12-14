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

_proto.render = function() {
    if (this.properties["source"] && this.properties["slice"] && this.properties["repeat"]) 
        wormHelper.writeResponse("border-image: url(" + this.properties["source"] + ") " + this.properties["slice"] + " " + this.properties["repeat"] + ";");
    else {
        if (this.properties["source"]) wormHelper.writeResponse("border-image-source: url(" + this.properties["source"] +");");
        if (this.properties["slice"]) wormHelper.writeResponse("border-image-slice: " + this.properties["slice"] + ";");
        if (this.properties["repeat"]) wormHelper.writeResponse("border-image-repeat: " + this.properties["repeat"] + ";");
    }

    if (this.properties["outset"]) wormHelper.writeResponse("border-image-outset: " + this.properties["outset"] + ";");
    if (this.properties["width"]) wormHelper.writeResponse("border-image-width: " + this.properties["width"] + ";");
}

module.exports = borderImageStyle;