var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/pageBase.js").prototype,
    _proto = mainPage.prototype = Object.create(_parent);

var gridControl = wormHelper.refreshModule("./worm_scheme/ui_elements/gridControl.js");
var panel = wormHelper.refreshModule("./worm_scheme/ui_elements/panel.js");
var columnDefinition = wormHelper.refreshModule("./worm_scheme/ui_elements/ui_extensions/columnDefinition.js");
var rowDefinition = wormHelper.refreshModule("./worm_scheme/ui_elements/ui_extensions/rowDefinition.js");
var explorer = wormHelper.refreshModule("./worm_scheme/ui_elements/explorer.js");

function mainPage() {
    _parent.constructor.apply(this);

    this.gridControl1 = new gridControl();
    this.explorer1 = new explorer();

    this.column1 = new columnDefinition();
    this.row1 = new rowDefinition();
}

_proto.createElements = function() {
    this.column1.set("width", "auto");
    this.row1.set("height", "auto");

    this.gridControl1.set("identifier", "factory_gridControl1");
    this.gridControl1.set("parent", this);
    this.gridControl1.set("height", "400px");
    this.gridControl1.set("width", "inherit");
    this.gridControl1.set("paddingTop", "20");
    this.gridControl1.set("paddingBottom", "20");
    this.gridControl1.set("paddingLeft", "20");
    this.gridControl1.set("paddingRight", "20");
    this.gridControl1.addColumnDefinition(this.column1);
    this.gridControl1.addRowDefinition(this.row1);


    this.explorer1.set("identifier", "factory_explorer");
    this.explorer1.set("parent", this.gridControl1);

    gridControl.setGridProperty(this.explorer1, "row", 0);
    gridControl.setGridProperty(this.explorer1, "column", 0);    
}

module.exports = mainPage;