var _parent = wormHelper.refreshModule("./worm_scheme/renderBase.js").prototype,
    _proto = backgroundStyle = Object.create(_parent);

_proto.constructor = backgroundStyle;

function backgroundStyle() {
    _parent.constructor.apply(this);
}

_proto.get = function(propertyName) {
    switch (propertyName.trim().toLowerCase()) {
        case "backgroundcollection":
            return this.getBackgroundCollection();
        case "color":
            return this.properties["color"];
        default:
            return _parent.get.call(this, propertyName);
    }
}

_proto.set = function(propertyName, value) {
    switch (propertyName.trim().toLowerCase()) {
        case "backgroundcollection":
            this.properties["backgroundCollection"] = value;
            return true;
        case "color":
            this.properties["color"] = value;
            return true;
        default: 
            return _parent.set.call(this, propertyName, value);
    }
}
_proto.getBackgroundCollection = function() {
    if (!this.properties["backgroundCollection"]) 
        this.properties["backgroundCollection"] = [];
    return this.properties["backgroundCollection"];
}

_proto.addBackground = function(newBackgroundStyle) {
    var backgroundCollection = this.getBackgroundCollection();
    backgroundCollection.push(newBackgroundStyle);
    return true;
}

_proto.render = function() {
    var backgroundCollection = this.getBackgroundCollection();
    var count = backgroundCollection.length;
    for (var i = 0; i < count; i++) {
        var definition = backgroundCollection[i].properties;
    }

    //shorthand

    // background-color
    //background-image
    //background-repeat
    //background-attachment
    //background-position

    if (this.properties["color"]) wormHelper.writeResponse("background-color: " + this.properties["color"] + ";");
}

module.exports = backgroundStyle;