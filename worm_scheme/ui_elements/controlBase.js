
var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/uiBase.js").prototype,
	_proto = controlBase.prototype = Object.create(_parent);

var lookAndFeelObj = wormHelper.refreshModule("./worm_scheme/ui_elements/lookAndFeel.js");
	
_proto.constructor = controlBase;
_proto.lookAndfeel = null;

function controlBase() {
	_parent.constructor.apply(this, arguments);
	this.lookAndFeel = new lookAndFeelObj();
	this.properties["classCollection"] = [];
}

_proto.set = function(propertyName, value) {
	switch(propertyName.trim().toLowerCase()) {
		case "classname":
			this.properties["classCollection"].push(value);
			return true;
		case "identifier":
			this.properties["identifier"] = value;
			return true;
		case "name":
			this.properties["name"] = value;
			return true;
		case "parent":
			value.addControl(this);
			return true;
			
		///////////////////////////////look and feel//////////////////////////////////////////////////	
		
		case "margintop":
		case "marginleft": 
		case "marginright":
		case "marginbottom":
		
		case "paddingtop":
		case "paddingleft":
		case "paddingright":
		case "paddingbottom":
		
		case "bordertop":
		case "borderleft":
		case "borderright":
		case "borderbottom":
		
		case "bordercolortop":
		case "bordercolorleft":
		case "bordercolorright":
		case "bordercolorbottom":
		
		case "bordertopstyle":
		case "borderleftstyle":
		case "borderrightstyle":
		case "borderbottomstyle":
		
		case "bordertopwidth":
		case "borderleftwidth":
		case "borderrightwidth":
		case "borderbottomwidth":
		
		case "bordertopleftradius":
		case "bordertoprightradius":
		case "borderbottomleftradius":
		case "borderbottomrightradius":
		
		case "backgroundcolor":
		case "backgroundsize":
		case "backgroundposition":
		case "backgroundattachment":
		case "backgroundrepeat":
		case "backgroundimage":
		case "color":
		
		case "height":
		case "minheight":
		case "maxheight":
		
		case "width":
		case "minwidth":
		case "maxwidth":
		
		case "lineargradient":
		case "radialgradient":
		case "repeatinglineargradient":
		case "repeatingradialgradient":
		
		case "opacity":
		
		case "overflow":
		case "overflowx":
		case "overflowy":
		
		case "visibility":
		case "display":
		
		case "verticalalign":
		
		case "zindex":
		
		case "textdecoration":
		case "fontsize":
		case "fontfamily":
		case "fontstyle":
		case "fontvariant":
		case "fontweight":
		case "atfontface":
		
		case "liststyle":
		case "liststyleimage":
		case "liststyleposition":
		case "liststyletype":
		
		case "cursor":
            this.lookAndFeel.set(propertyName, value);
			return true;
		
		///////////////////////////////look and feel//////////////////////////////////////////////////
		default:
			return _parent.set.call(this, propertyName, value);
	}
};

_proto.get = function(propertyName) {
	
	switch(propertyName.trim().toLowerCase()) {
		case "classname":
			if(this.properties["classCollection"][0] !== undefined)
			{
				return this.properties["classCollection"][0];
			}
			else 
			{
				return "";
			}
		case "classcollection":
			return this.getClasses();
		case "identifier":
			if(this.properties["identifier"] !== undefined)
			{
				return this.properties["identifier"];
			}
			else
			{
				return "";
			}
		case "name":
			return this.properties["name"];
		default:
			return _parent.get.call(this, propertyName);
	}
};

_proto.getClasses = function() {
	
	var classCollection = this.properties["classCollection"];
	var count = 0;
	var classResult = "";
	
	for(count; classCollection[count] !== undefined; count++)
	{
		classResult += classCollection[count] + " ";
	}
	
	return classResult;
};

_proto.getInlineStlye = function() {
	var inlineStyle = "";
	
	//margin
	if(this.lookAndFeel.properties.margin !== undefined) {
		inlineStyle += "margin: " + this.lookAndFeel.properties.margin + ";";
	}
	
	if(this.lookAndFeel.properties.marginTop !== undefined) {
		inlineStyle += "margin-top: " + this.lookAndFeel.properties.marginTop + ";";
	}
	
	if(this.lookAndFeel.properties.marginLeft !== undefined) {
		inlineStyle += "margin-left: " + this.lookAndFeel.properties.marginLeft + ";";
	}
	
	if(this.lookAndFeel.properties.marginRight !== undefined) {
		inlineStyle += "margin-right: " + this.lookAndFeel.properties.marginRight + ";";
	}
	
	if(this.lookAndFeel.properties.marginBottom !== undefined) {
		inlineStyle += "margin-bottom: " + this.lookAndFeel.properties.marginBottom + ";";
	}
	
	//padding
	if(this.lookAndFeel.properties.padding !== undefined) {
		inlineStyle += "padding " + this.lookAndFeel.properties.padding + ";";
	}
	
	if(this.lookAndFeel.properties.paddingTop !== undefined) {
		inlineStyle += "padding-top: " + this.lookAndFeel.properties.paddingTop + ";";
	}
	
	if(this.lookAndFeel.properties.paddingLeft !== undefined) {
		inlineStyle += "padding-left: " + this.lookAndFeel.properties.paddingLeft + ";";
	}
	
	if(this.lookAndFeel.properties.paddingRight !== undefined) {
		inlineStyle += "padding-right: " + this.lookAndFeel.properties.paddingRight + ";";
	}
	
	if(this.lookAndFeel.properties.paddingBottom !== undefined) {
		inlineStyle += "padding-bottom: " + this.lookAndFeel.properties.paddingBottom + ";";
	}
	
	//border
	if(this.lookAndFeel.properties.border !== undefined) {
		inlineStyle += "border: " + this.lookAndFeel.properties.border + ";";
	}
	
	if(this.lookAndFeel.properties.borderTop !== undefined) {
		inlineStyle += "border-top: " + this.lookAndFeel.properties.borderTop + ";";
	}
	
	if(this.lookAndFeel.properties.borderLeft !== undefined) {
		inlineStyle += "border-left: " + this.lookAndFeel.properties.borderLeft + ";";
	}
	
	if(this.lookAndFeel.properties.borderRight !== undefined) {
		inlineStyle += "border-right: " + this.lookAndFeel.properties.borderRight + ";";
	}
	
	if(this.lookAndFeel.properties.borderTop !== undefined) {
		inlineStyle += "border-bottom: " + this.lookAndFeel.properties.borderBottom + ";";
	}
	
	//border-color
	//In-progress
	
	//border-style
	//In-progress
	
	//border-width
	//In-progress
	
	//border-radius
	//In-progress
	
	//background
	if(this.lookAndFeel.properties.background !== undefined) {
		inlineStyle += "background: " + this.lookAndFeel.properties.background + ";";
	}
	
	if(this.lookAndFeel.properties.backgroundColor !== undefined) {
		inlineStyle += "background-color: " + this.lookAndFeel.properties.backgroundColor + ";";
	}
	
	if(this.lookAndFeel.properties.backgroundSize !== undefined) {
		inlineStyle += "background-size: " + this.lookAndFeel.properties.backgroundSize + ";";
	}
	
	if(this.lookAndFeel.properties.backgroundPosition !== undefined) {
		inlineStyle += "background-position: " + this.lookAndFeel.properties.backgroundPosition + ";";
	}
	
	if(this.lookAndFeel.properties.backgroundAttachment !== undefined) {
		inlineStyle += "background-attachment: " + this.lookAndFeel.properties.backgroundAttachment + ";";
	}
	
	if(this.lookAndFeel.properties.backgroundRepeat !== undefined) {
		inlineStyle += "background-repeat: " + this.lookAndFeel.properties.backgroundRepeat + ";";
	}
	
	if(this.lookAndFeel.properties.backgroundImage !== undefined) {
		inlineStyle += "background-image: " + this.lookAndFeel.properties.backgroundImage + ";";
	}
	
	//color
	if(this.lookAndFeel.properties.color !== undefined) {
		inlineStyle += "color: " + this.lookAndFeel.properties.color + ";";
	}
	
	//height
	if(this.lookAndFeel.properties.height !== undefined) {
		inlineStyle += "height: " + this.lookAndFeel.properties.height + ";";
	}
	
	if(this.lookAndFeel.properties.minHeight !== undefined) {
		inlineStyle += "min-height: " + this.lookAndFeel.properties.minHeight + ";";
	}
	
	if(this.lookAndFeel.properties.maxHeight !== undefined) {
		inlineStyle += "max-height: " + this.lookAndFeel.properties.minHeight + ";";
	}
	
	//width
	if(this.lookAndFeel.properties.width !== undefined) {
		inlineStyle += "width: " + this.lookAndFeel.properties.width + ";";
	}
	
	if(this.lookAndFeel.properties.minWidth !== undefined) {
		inlineStyle += "min-width: " + this.lookAndFeel.properties.minWidth + ";";
	}
	
	if(this.lookAndFeel.properties.maxWidth !== undefined) {
		inlineStyle += "max-width: " + this.lookAndFeel.properties.maxWidth + ";";
	}
	
	return inlineStyle;
};

_proto.render = function() {};
_proto.preRender = function() {};
_proto.postRender = function() {
	
	var classname = this.get("className");
	var id = this.get("identifier");
	
	wormHelper.writeResponse("<style>");
	wormHelper.writeResponse("#" + id + "{");
	
	
	
	wormHelper.writeResponse("}");
	wormHelper.writeResponse("</style>");
	
};

module.exports = controlBase;