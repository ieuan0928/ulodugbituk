var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/pageBase.js").prototype,
    _proto = mainPage.prototype = Object.create(_parent);

var gridControl = wormHelper.refreshModule("./worm_scheme/ui_elements/gridControl.js");
var label = wormHelper.refreshModule("./worm_scheme/ui_elements/label.js");
var columnDefinition = wormHelper.refreshModule("./worm_scheme/ui_elements/ui_extensions/columnDefinition.js");
var rowDefinition = wormHelper.refreshModule("./worm_scheme/ui_elements/ui_extensions/rowDefinition.js");

function mainPage() {
    _parent.constructor.apply(this);

    this.gridControl1 = new gridControl();
    this.label1 = new label();

    this.row1 = new rowDefinition();
    this.row2 = new rowDefinition();

    this.column1 = new columnDefinition();
    this.column2 = new columnDefinition();
}

_proto.createElements = function() {
    this.gridControl1.set("parent", this);

    console.log(this.row1 instanceof rowDefinition);
    this.gridControl1.addRowDefinition(this.row1);
    this.gridControl1.addRowDefinition(this.row2);
    this.gridControl1.addColumnDefinition(this.column1);
    this.gridControl1.addColumnDefinition(this.column2);

    this.label1.set("parent", this.gridControl1);
}

module.exports = mainPage;