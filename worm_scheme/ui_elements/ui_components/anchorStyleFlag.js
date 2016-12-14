var _parent = wormHelper.refreshModule("./worm_scheme/anchorStyle.js").prototype,
    _proto = anchorStyleFlag.prototype = Object.create(_parent);

_proto.constructor = anchorStyleFlag;

function anchorStyleFlag() {
    _parent.constructor.apply(this);
}

_proto.get = function(propertyName) {
    switch (propertyName.trim().toLowerCase()) {
        case "allhasstyle":
            return (this.properties["top"] && 
                this.properties["right"] && 
                this.properties["bottom"] &&
                this.properties["left"]);
        default:
            return _parent.get.call(this, propertyName);
    }
}

module.exports = anchorStyleFlag;