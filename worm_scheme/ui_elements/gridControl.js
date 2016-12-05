var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/containerControl.js").prototype,
    _proto = gridControl.prototype = Object.create(_parent);

var columnDefintion = wormHelper.refreshModule("./worm_scheme/ui_elements/ui_components/columnDefinition.js");
var rowDefinition = wormHelper.refreshModule("./worm_scheme/ui_elements/ui_components/rowDefinition.js");
var gridProperty = wormHelper.refreshModule("./worm_scheme/ui_elements/ui_components/gridProperty.js");

_proto.constructor = gridControl;

function gridControl() {
    _parent.constructor.apply(this);

    this.properties["rowDefinitions"] = [];
    this.properties["columnDefinitions"] = [];
}

gridControl.ensureGridProperty = function(element) {
    if (!("gridProperty" in element.properties)) 
        element.properties.gridProperty = new gridProperty();

    return element.properties.gridProperty;
}

gridControl.getGridProperty = function(element, propertyName) {
    var gridProperty = gridControl.ensureGridProperty(element);

    switch (propertyName.trim().toLowerCase()) {
        case "column":
            return gridProperty.get("column");
        case "row":
            return gridProperty.get("row");
        case "columnspan":
            return gridProperty.get("columnSpan");
        case "rowspan":
            return gridProperty.get("rowSpan");
        default:
            throw "Invalid Property: GridProperty does not contain specified Property";
    }
}

gridControl.setGridProperty = function(element, propertyName, value) {
    var gridProperty = gridControl.ensureGridProperty(element);

    switch (propertyName.trim().toLowerCase()) {
        case "column":
            return gridProperty.set("column", value);
        case "row":
            return gridProperty.set("row", value);
        case "columnspan":
            return gridProperty.set("columnSpan", value);
        case "rowspan":
            return gridProperty.set("rowSpan", value);
        default:
            throw "Invalid Property: GridProperty does not contain specified Property.";
    }
}

_proto.get = function(propertyName) {
    switch(propertyName.trim().toLowerCase()) {
        case "rowdefinitions" : 
            return this.properties["rowDefinitions"];
        case "columndefinitions": 
            return this.properties["columnDefinitions"];
        default: 
            return _parent.get.call(this, propertyName);
    }
}

_proto.set = function(propertyName, value) {
    switch(propertyName.trim().toLowerCase()) {
        default:
            return _parent.set.call(this, propertyName, value);
    }
}

_proto.addColumnDefinition = function(newColumnDefinition) {
    if (newColumnDefinition.constructor.name != "columnDefinition") 
        throw "gridControl.addColumnDefintion accepts argument of type columnDefintion only.";

    this.properties.columnDefinitions.push(newColumnDefinition);
}

_proto.addRowDefinition = function(newRowDefinition) {
    if (newRowDefinition.constructor.name != "rowDefinition") 
        throw "gridControl.addRowDefinition accepts argument of type rowDefinition only.";

    this.properties.rowDefinitions.push(newRowDefinition);
}

_proto.preRender = function() {
    _parent.preRender.call(this);

    wormHelper.site.jsBundler("/ws_js/gcb.js", "./worm_scheme/js/gridBehavior.js");
}

_proto.render = function() {
    if (!this.properties.identifier) throw new EvalError("Must have property identifier.");

    var inlineStyle = this.getInlineStlye();

    wormHelper.writeResponse("<div id='" + this.properties.identifier + "' style='" + inlineStyle + "'>");
    wormHelper.writeResponse("<div class='gridClient' style='position:relative; height:inherit; width:inherit'>");
    var childControls = this.properties.childControls;
    for (var index in childControls) {
        var childControl = childControls[index];
        var gridProperty = gridControl.ensureGridProperty(childControl);

        wormHelper.writeResponse("<div style='position:absolute; float:left' data-row='" + gridProperty.get("row") + "' data-rowSpan='" + gridProperty.get("rowSpan") + "' data-column='" + gridProperty.get("column") + "' data-columnSpan='" + gridProperty.get("columnSpan") + "'>");
        childControl.render();
        wormHelper.writeResponse("</div>");
    }

    wormHelper.writeResponse("</div>");
    wormHelper.writeResponse("</div>");
}

_proto.postRender = function() {
    wormHelper.writeResponse("<script>");
    wormHelper.writeResponse("$('#" + this.properties.identifier + "').applyGridBehavior({");

    wormHelper.writeResponse("rowDefinitions:" );
    wormHelper.writeObject(this.properties.rowDefinitions) 
    wormHelper.writeResponse(",");
    wormHelper.writeResponse("columnDefinitions:");
    wormHelper.writeObject(this.properties.columnDefinitions);

    wormHelper.writeResponse("});");
    wormHelper.writeResponse("</script>");
}

module.exports = gridControl;