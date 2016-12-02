var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/controlBase.js").prototype,
    _proto = explorer.prototype = Object.create(_parent);

_proto.constructor = explorer;

function explorer() {
    _parent.constructor.apply(this);
}

_proto.get = function(propertyName) {
    switch (propertyName.trim().toLowerCase()) {
        default:
            return _parent.get.call(this, propertyName);
    }
}

_proto.set = function(propertyName, value) {
    switch (propertyName.trim().toLowerCase()) {
        default:
            return _parent.set.call(this, propertyName, value);
    }
}

_proto.render = function() {
    wormHelper.writeResponse("<div>Hello World</div>");
}

module.exports = explorer;
