var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/pageBase.js").prototype,
    _proto = mainPage.prototype = Object.create(_parent);

var gridControl = wormHelper.refreshModule("./worm_scheme/ui_elements/gridControl.js");
var panel = wormHelper.refreshModule("./worm_scheme/ui_elements/panel.js");
var columnDefinition = wormHelper.refreshModule("./worm_scheme/ui_elements/ui_extensions/columnDefinition.js");
var rowDefinition = wormHelper.refreshModule("./worm_scheme/ui_elements/ui_extensions/rowDefinition.js");

function mainPage() {
    _parent.constructor.apply(this);

    this.gridControl1 = new gridControl();

    this.column1 = new columnDefinition();
    this.column2 = new columnDefinition();
    this.column3 = new columnDefinition();

    this.row1 = new rowDefinition();
    this.row2 = new rowDefinition();
    this.row3 = new rowDefinition();

    this.panel1 = new panel();
    this.panel2 = new panel();
    this.panel3 = new panel();
    this.panel4 = new panel();
}

_proto.createElements = function() {
    this.column1.set("width", "auto");
    this.column2.set("width", "auto");
    this.column3.set("width", "*");
    this.column1.set("minWidth", 150);
    this.column2.set("minWidth", 10);
    this.row1.set("height", "auto");
    this.row2.set("height", "auto");
    this.row3.set("height", "auto");

    this.gridControl1.set("identifier", "factory_gridControl1");
    this.gridControl1.set("parent", this);
    this.gridControl1.set("height", "400px");
    this.gridControl1.set("width", "inherit");
    this.gridControl1.set("paddingTop", "20");
    this.gridControl1.set("paddingBottom", "20");
    this.gridControl1.set("paddingLeft", "20");
    this.gridControl1.set("paddingRight", "20");
    this.gridControl1.addColumnDefinition(this.column1);
    this.gridControl1.addColumnDefinition(this.column2);
    this.gridControl1.addColumnDefinition(this.column3);
    this.gridControl1.addRowDefinition(this.row1);
    this.gridControl1.addRowDefinition(this.row2);
    this.gridControl1.addRowDefinition(this.row3);

    this.panel1.set("identifier", "factory_panel1");
    this.panel1.set("parent", this.gridControl1);
    this.panel1.set("height", "25px");
    this.panel1.set("width", "200px");
    this.panel1.set("backgroundColor", "blue");

    this.panel2.set("identifier", "factory_panel2");
    this.panel2.set("parent", this.gridControl1);
    this.panel2.set("height", "20px");
    this.panel2.set("width", "20px");
    this.panel2.set("backgroundColor", "black");

    this.panel3.set("identifier", "factory_panel3");
    this.panel3.set("parent", this.gridControl1);
    this.panel3.set("height", "20px");
    this.panel3.set("width", "20px");
    this.panel3.set("backgroundColor", "black");

    this.panel4.set("identifier", "factory_panel4");
    this.panel4.set("parent", this.gridControl1);
    this.panel4.set("height", "20px");
    this.panel4.set("width", "inherit");
    this.panel4.set("backgroundColor", "blue");

    gridControl.setGridProperty(this.panel1, "row", 1);
    gridControl.setGridProperty(this.panel1, "column", 0);
    gridControl.setGridProperty(this.panel1, "columnSpan", 2);

    gridControl.setGridProperty(this.panel2, "row", 0);
    gridControl.setGridProperty(this.panel2, "column", 0);

    gridControl.setGridProperty(this.panel3, "row", 0);
    gridControl.setGridProperty(this.panel3, "column", 1);

    gridControl.setGridProperty(this.panel4, "row", 0);
    gridControl.setGridProperty(this.panel4, "column", 2);
    
}

module.exports = mainPage;