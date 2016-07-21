var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/pageBase.js").prototype,
    _proto = mainPage.prototype = Object.create(_parent);

var gridControl = wormHelper.refreshModule("./worm_scheme/ui_elements/gridControl.js");

function mainPage() {
    _parent.constructor.apply(this);

    this.gridControl1 = new gridControl();
}

_proto.createElements = function() {
    this.gridControl1.set("parent", this);
}

module.exports = mainPage;