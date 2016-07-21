var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/containerControl.js"),
    _proto = gridControl.prototype = Object.create(_parent);

function gridControl() {
    _parent.constructor.apply(this);

    this.properties["rowDefinitions"] = [];
    this.properties["columnDefinitions"] = [];
}

_proto.get = function(propertyName) {
    switch(propertyName.trim().toLowerCase()) {
        case "rowdefinitions" : 
            return this.properties["rowDefinitions"];
        case "columndefinitions": 
            return this.properties["columnDefintions"];
        default: 
            return _parent.get.call(this, propertyName);
    }
}

_proto.set = function(propertyName, value) {
    switch(propertyName.trim().toLowerCase()) {
        default:
            return _parent.set.call(this, propertyName, value);
    }
}


module.exports = gridControl;