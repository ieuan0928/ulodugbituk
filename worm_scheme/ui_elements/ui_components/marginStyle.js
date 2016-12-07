var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/ui_components/anchorStyle.js").prototype,
    _proto = marginStyle.prototype = Object.create(_parent);

_proto.constructor = marginStyle;

function marginStyle() {
    _parent.constructor.apply(this);
}

_proto.render = function() {
    if (this.properties.top && this.properties.right && this.properties.bottom && this.properties.right) 
        wormHelper.writeResponse("margin: " + this.properties.top + ", " + this.properties.right + ", " + this.properties.bottom + ", " + this.properties.right + "; ");
    
	else {
        if (this.properties.top) 
            wormHelper.writeResponse("margin-top: " + this.properties.top + "; ");

        if (this.properties.right)
            wormHelper.writeResponse("margin-right: " + this.properties.right + "; ");
        
        if (this.properties.bottom)
            wormHelper.writeResponse("margin-bottom: " + this.properties.bottom + "; ");

        if (this.properties.left) 
            wormHelper.writeResponse("margin-left: " + this.properties.left + "; ");
    }
}

module.exports = marginStyle;