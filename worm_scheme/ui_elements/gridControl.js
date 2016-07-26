var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/containerControl.js").prototype,
    _proto = gridControl.prototype = Object.create(_parent);

var columnDefintion = wormHelper.refreshModule("./worm_scheme/ui_elements/ui_extensions/columnDefinition.js");
var rowDefinition = wormHelper.refreshModule("./worm_scheme/ui_elements/ui_extensions/rowDefinition.js");

_proto.constructor = gridControl;

function gridControl() {
    _parent.constructor.apply(this);

    this.properties["rowDefinitions"] = [];
    this.properties["columnDefinitions"] = [];
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

    var childControls = this.properties.childControls;

    for (var index in childControls) {
        var childProperties = childControls[index].properties;

        if (!('grid' in childProperties)) {
            var gridProperty = wormHelper.refreshModule("./worm_scheme/ui_elements/ui_extensions/gridProperty.js");

            childProperties.gridProperty = new gridProperty();           
        }
    }

    wormHelper.site.jsBundler("/ws_js/gcb.js", "./worm_scheme/js/gridBehavior.js")
}

_proto.render = function() {
    if (!this.properties.identifier) throw new EvalError("Must have property identifier.");

    wormHelper.writeResponse("<div id='" + this.properties.identifier + "'>");
    wormHelper.writeResponse("test lang...");
    wormHelper.writeResponse("</div>");
}

_proto.postRender = function() {
    wormHelper.writeResponse("<script>");
    wormHelper.writeResponse("$('#" + this.properties.identifier + "').applyGridBehavior({");
    wormHelper.writeResponse("rowDefinitions:" + JSON.stringify(this.properties.rowDefinitions, {
        indent: ' ',
        singleQuotes: false,
        inlineCharacterLimit: 100
}) + ",");
    wormHelper.writeResponse("columnDefinitions:" + this.properties.columnDefinitions);
    wormHelper.writeResponse("});");
    wormHelper.writeResponse("</script>");
}

module.exports = gridControl;