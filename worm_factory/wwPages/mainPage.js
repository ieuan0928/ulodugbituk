var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/pageBase.js").prototype,
    _proto = mainPage.prototype = Object.create(_parent);

var gridControl = wormHelper.refreshModule("./worm_scheme/ui_elements/gridControl.js");
var panel = wormHelper.refreshModule("./worm_scheme/ui_elements/panel.js");
var columnDefinition = wormHelper.refreshModule("./worm_scheme/ui_elements/ui_extensions/columnDefinition.js");
var rowDefinition = wormHelper.refreshModule("./worm_scheme/ui_elements/ui_extensions/rowDefinition.js");

function mainPage() {
    _parent.constructor.apply(this);

    this.panel1 = new panel();
    this.panel2 = new panel();
    this.panel5 = new panel();
    this.panel6 = new panel();
    this.gridControl1 = new gridControl();

    this.row1 = new rowDefinition();
    this.row2 = new rowDefinition();
    this.row3 = new rowDefinition();

    this.column1 = new columnDefinition();
    this.column2 = new columnDefinition();
    this.column3 = new columnDefinition();
}

_proto.createElements = function() {
    this.row1.set("height", 120);
    this.row2.set("height", "*");
    this.row3.set("height", 10);
    this.column1.set("width", "auto");
    this.column2.set("width", "0.5*");
    this.column2.set("minWidth", 50);
    this.column3.set("width", "3*");
    this.column3.set("minWidth", 50);

    this.gridControl1.set("parent", this);
    this.gridControl1.set("height", "600px");
    this.gridControl1.set("width", "inherit");
    this.gridControl1.set("identifier", "factory_gridControl1");
    this.gridControl1.set("paddingLeft", "10px");
    this.gridControl1.set("paddingTop", "10px");
    this.gridControl1.set("paddingBottom", "10px");
    this.gridControl1.set("paddingRight", "10px");
    this.gridControl1.addRowDefinition(this.row1);
    this.gridControl1.addRowDefinition(this.row3);
    this.gridControl1.addRowDefinition(this.row2);
    this.gridControl1.addColumnDefinition(this.column1);
    this.gridControl1.addColumnDefinition(this.column2);
    this.gridControl1.addColumnDefinition(this.column3);

    this.panel1.set("parent", this.gridControl1);
    this.panel1.set("identifier", "factory_panel1");
    this.panel1.set("backgroundColor", "red");
    this.panel1.set("height", "inherit");
    this.panel1.set("width", "40px");

    this.panel2.set("parent", this.gridControl1);
    this.panel2.set("identifier", "factory_panel2");
    this.panel2.set("backgroundColor", "black");
    this.panel2.set("height", "inherit");
    this.panel2.set("width", "inherit");

    this.panel5.set("parent", this.gridControl1);
    this.panel5.set("identifier", "factory_panel5");
    this.panel5.set("backgroundColor", "green");
    this.panel5.set("height", "inherit");
    this.panel5.set("width", "inherit");

    this.panel6.set("parent", this.gridControl1);
    this.panel6.set("identifier", "factory_panel6");
    this.panel6.set("backgroundColor", "lightblue");
    this.panel6.set("height", "inherit");
    this.panel6.set("width", "inherit");

    gridControl.setGridProperty(this.panel1, "column", 0);
    gridControl.setGridProperty(this.panel1, "row", 0);
    gridControl.setGridProperty(this.panel1, "rowSpan", 3);
    gridControl.setGridProperty(this.panel2, "column", 1);
    gridControl.setGridProperty(this.panel2, "row", 0);
    gridControl.setGridProperty(this.panel5, "column", 1);
    gridControl.setGridProperty(this.panel5, "row", 2);
    gridControl.setGridProperty(this.panel5, "columnSpan", 2);
    gridControl.setGridProperty(this.panel6, "column", 2);
    gridControl.setGridProperty(this.panel6, "row", 0);

}

module.exports = mainPage;