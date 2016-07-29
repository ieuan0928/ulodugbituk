var _parent = wormHelper.refreshModule("./worm_scheme/renderBase.js").prototype,
    _proto = cssRenderer.prototype = Object.create(_parent);

_proto.constructor = cssRenderer;

function cssRenderer() {
    _parent.constructor.apply(this);
    this.properties = [];
}

_proto.get = function(propertyName) {

}

_proto.set = function(propertyName, value) {
    switch (propertyName.trim().toLowerCase()) {
        case "styleobject":
            this.properties["styleObject"] = value;
            return true;
        default:
            return _parent.set.call(this, propertyName, value);
    }
}

_proto.render = function() {
    wormHelper.writeResponse(".text_Box_Default_Class {");
    //margin
    wormHelper.writeResponse("margin-top: " + this.properties.styleObject.marginTop + ";");
    wormHelper.writeResponse("margin-left: " + this.properties.styleObject.marginLeft + ";");
    wormHelper.writeResponse("margin-right: " + this.properties.styleObject.marginRight + ";");
    wormHelper.writeResponse("margin-bottom: " + this.properties.styleObject.marginBottom + ";");

    //padding
    wormHelper.writeResponse("padding-top: " + this.properties.styleObject.paddingTop + ";");
    wormHelper.writeResponse("padding-left: " + this.properties.styleObject.paddingTop + ";");
    wormHelper.writeResponse("padding-right: " + this.properties.styleObject.paddingRight + ";");
    wormHelper.writeResponse("padding-bottom: " + this.properties.styleObject.paddingBottom + ";");

    //background
    wormHelper.writeResponse("background-color: " + this.properties.styleObject.backgroundColor + ";");

    wormHelper.writeResponse("}");

}

module.exports = cssRenderer;