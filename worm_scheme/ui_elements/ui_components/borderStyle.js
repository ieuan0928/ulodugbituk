var _parent = wormHelper.refreshModule("./worm_scheme/renderBase.js").prototype,
    _proto = borderStyle.prototype = Object.create(_parent);

_proto.constructor = borderStyle;

function borderStyle() {
    _parent.constructor.apply(this);
}

_proto.get = function(propertyName) {
    switch (propertyName.trim().toLowerCase()) {
        case "definition":
            if (!this.properties["definition"]) {
                var borderDefinition = wormHelper.refreshModule("./worm_scheme/ui_elements/ui_components/borderStyleDefinition.js");
                this.properties["definition"] = new borderDefinition();
            }
            return this.properties["definition"];
        default:
            return _parent.get.call(this, propertyName);
    }
}

_proto.set = function(propertyName, value) {
    switch (propertyName.trim().toLowerCase()) {
        case "definition":
            this.properties["definition"] = value;
            return;
        default:
            return _parent.set.call(this, propertyName, value);
    }
}

_proto.render = function() {
    if (this.properties["definition"])
        this.properties["definition"].render();
}

module.exports = borderStyle;