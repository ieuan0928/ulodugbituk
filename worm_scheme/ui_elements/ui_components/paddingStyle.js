var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/ui_components/baseStyle.js").prototype,
    _proto = marginStyle.prototype = Object.create(_parent);

_proto.constructor = paddingStyle;

function paddingStyle() {
    _parent.constructor.apply(this);
}

_proto.render = function() {
    if (this.get["allHasStyle"]) 
        wormHelper.writeResponse("padding: " + 
            this.properties.top + ", " +
            this.properties.right + ", " +
            this.properties.bottom + ", " +
            this.properties.left + "; ");
    else {
        if (this.properties.top) 
            wormHelper.writeResponse("padding-top: " + this.properties.top + "; ");

        if (this.properties.right) 
            wormHelper.writeResponse("padding-right: " + this.properties.right + "; ");

        if (this.properties.bottom) 
            wormHelper.writeResponse("padding-bottom: " + this.properties.bottom + "; ");

        if (this.properties.left) 
            wormHelper.writeResponse("padding-left: " + this.properties.left + "; ");
    }
}

module.exports = paddingStyle;