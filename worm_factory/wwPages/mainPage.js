var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/pageBase.js").prototype,
    _proto = mainPage.prototype = Object.create(_parent);

var gridControl = wormHelper.refreshModule("./worm_scheme/ui_elements/gridControl.js");
var panel = wormHelper.refreshModule("./worm_scheme/ui_elements/panel.js");
var columnDefinition = wormHelper.refreshModule("./worm_scheme/ui_elements/ui_extensions/columnDefinition.js");
var rowDefinition = wormHelper.refreshModule("./worm_scheme/ui_elements/ui_extensions/rowDefinition.js");

function mainPage() {
    _parent.constructor.apply(this);

    this.panel1 = new panel();
    this.gridControl1 = new gridControl();

    this.row1 = new rowDefinition();
    this.row2 = new rowDefinition();

    this.column1 = new columnDefinition();
    this.column2 = new columnDefinition();
}

_proto.createElements = function() {
    this.gridControl1.set("parent", this);
    this.gridControl1.set("identifier", "factory_gridControl1")
    this.gridControl1.addRowDefinition(this.row1);
    this.gridControl1.addRowDefinition(this.row2);
    this.gridControl1.addColumnDefinition(this.column1);
    this.gridControl1.addColumnDefinition(this.column2);

    this.panel1.set("parent", this.gridControl1);
    this.panel1.set("identifier", "factory_panel1");
    this.panel1.set("paddingTop", "10px");
    this.panel1.set("paddingBottom", "10px");
    this.panel1.set("paddingRight", "10px");
    this.panel1.set("paddingLeft", "10px");
    this.panel1.set("backgroundColor", "red");
}

module.exports = mainPage;