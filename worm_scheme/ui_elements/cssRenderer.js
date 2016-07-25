
var _proto = cssRenderer.prototype;
var textBoxStylingObject = wormHelper.refreshModule("./styles/textBoxStylingObject.js");

function cssRenderer() {}

_proto.render = function() {
	
	wormHelper.writeResponse(".text_Box_Default_Class {");
	//margin
	wormHelper.writeResponse("margin-top: " + textBoxStylingObject.marginTop + ";");
	wormHelper.writeResponse("margin-left: " + textBoxStylingObject.marginLeft + ";");
	wormHelper.writeResponse("margin-right: " + textBoxStylingObject.marginRight + ";");
	wormHelper.writeResponse("margin-bottom: " + textBoxStylingObject.marginBottom + ";");
	
	//padding
	wormHelper.writeResponse("padding-top: " + textBoxStylingObject.paddingTop + ";");
	wormHelper.writeResponse("padding-left: " + textBoxStylingObject.paddingTop + ";");
	wormHelper.writeResponse("padding-right: " + textBoxStylingObject.paddingRight + ";");
	wormHelper.writeResponse("padding-bottom: " + textBoxStylingObject.paddingBottom + ";");
	
	//background
	wormHelper.writeResponse("background-color: " + textBoxStylingObject.backgroundColor + ";");
	
	wormHelper.writeResponse("}");
	
}

module.exports = cssRenderer;