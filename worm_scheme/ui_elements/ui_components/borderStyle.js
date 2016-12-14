var _parent = wormHelper.refreshModule("./worm_scheme/anchorStyle.js").prototype,
    _proto = borderStyle.prototype = Object.create(_parent);

_proto.constructor = borderStyle;

function borderStyle() {
    _parent.constructor.apply(this);
}

_proto.get = function(propertyName) {
    switch (propertyName.trim().toLowerCase()) {
        case "definition":
            if (!this.properties["definition"]) {
                var borderStyleDefinition = wormHelper.refreshModule("./worm_scheme/ui_elements/ui_components/borderStyleDefinition.js");
                this.properties["definition"] = new borderStyleDefinition();
            }
            return this.properties["definition"];
        case "image":
            if (!this.properties["image"]) {
                var borderImage = wormHelper.refreshModule("./worm_scheme/ui_elements/ui_components/borderImageStyle.js");
                this.properties["image"] = new borderImage();
            }
            return this.properties["image"];
        case "topleftradius":
            return this.properties["topLeftRadius"];
        case "toprightradius":
            return this.properties["topRightRadius"];
        case "bottomrightradius":
            return this.properties["bottomRightRadius"];
        case "bottomleftradius":
            return this.properties["bottomLeftRadius"];
        default:
            return _parent.get.call(this, propertyName);
    }
}

_proto.set = function(propertyName, value) {
    switch (propertyName.trim().toLowerCase()) {
        case "definition":
            this.properties["definition"] = value;
            return true;
        case "image":
            this.properties["image"] = value;
            return true;
        case "topleftradius":
            this.properties["topLeftRadius"] = value;
            return true;
        case "toprightradius":
            this.properties["topRightRadius"] = value;
            return true;
        case "bottomrightradius":
            this.properties["bottomRightRadius"] = value;
            return true;
        case "bottomleftradius":
            this.properties["bottomLeftRadius"] = value;
            return true;
        default:
            return _parent.set.call(this, propertyName, value);
    }
}

_proto.renderAnchor  = function() {
    if (this.properties["top"]) {
        this.properties["top"].set("anchorPosition", "top");
        this.properties["top"].render();
    }

    if (this.properties["left"]) {
        this.properties["left"].set("anchorPosition", "left");
        this.properties["left"].render();
    }

    if (this.properties["right"]) {
        this.properties["right"].set("anchorPosition", "right");
        this.properties["right"].render();
    }
        
    if (this.properties["bottom"]) {
        this.properties["bottom"].set("anchorPosition", "bottom");
        this.properties["bottom"].render();
    }
}

_proto.renderBasic = function() {
    if (this.properties["definition"]) this.properties["definition"].render();
    if (this.properties["image"]) this.properties["image"].render();
}

_proto.renderRadius = function() {
    if (this.properties["topLeftRadius"] && this.properties["topRightRadius"] && this.properties["bottomRightRadius"] && this.properties["bottomLeftRadius"]) 
        wormHelper.writeResponse("border-radius: " + this.properties["topLeftRadius"] + " " + this.properties["bottomRightRadius"] + " " + this.properties["bottomLeftRadius"] + ";");
    else {
        if (this.properties["topLeftRadius"]) wormHelper.writeResponse("border-top-left-radius: " + this.properties["topLeftRadius"] + ";");
        if (this.properties["topRightRadius"]) wormHelper.writeResponse("border-top-right-radius: " + this.properties["topRightRadius"] + ";");
        if (this.properties["bottomRightRadius"]) wormHelper.writeResponse("border-bottom-right-radius: " + this.properties["bottomRightRadius"] + ";");
        if (this.properties["bottomLeftRadius"]) wormHelper.writeResponse("border-bottom-left-radius: " + this.properties["bottomLeftRadius"] + ";");
    }
}

_proto.render = function() {
    this.renderBasic();
    this.renderAnchor();
    this.renderRadius();
}

module.exports = borderStyle;