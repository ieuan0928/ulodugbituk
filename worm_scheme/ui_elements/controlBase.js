
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
			break;
		case "identifier":
			this.properties["identifier"] = value;
			return true;
			break;
		case "name":
			this.properties["name"] = value;
			return true;
			break;
		case "parent":
			value.addControl(this);
			return true;
			break;
			
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
			break;
		
		///////////////////////////////look and feel//////////////////////////////////////////////////
			
			
		default:
			return _parent.set.call(this, propertyName, value);
			break;
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
			break;
		case "classcollection":
			return this.getClasses();
			break;
		case "identifier":
			if(this.properties["identifier"] !== undefined)
			{
				return this.properties["identifier"];
			}
			else
			{
				return "";
			}
			break;
		case "name":
			return this.properties["name"];
			break;
		default:
			return _parent.get.call(this, propertyName);
			break;
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

_proto.render = function() {};
_proto.preRender = function() {};
_proto.postRender = function() {
	
	var classname = this.get("className");
	var id = this.get("identifier");
	
	wormHelper.writeResponse("<style>");
	wormHelper.writeResponse("#" + id + "{");
	
	//margin
	if(this.lookAndFeel.properties.margin !== undefined) {
		wormHelper.writeResponse("margin: " + this.lookAndFeel.properties.margin + ";");
	}
	
	if(this.lookAndFeel.properties.marginTop !== undefined) {
		wormHelper.writeResponse("margin-top: " + this.lookAndFeel.properties.marginTop + ";");
	}
	
	if(this.lookAndFeel.properties.marginLeft !== undefined) {
		wormHelper.writeResponse("margin-left: " + this.lookAndFeel.properties.marginLeft + ";");
	}
	
	if(this.lookAndFeel.properties.marginRight !== undefined) {
		wormHelper.writeResponse("margin-right: " + this.lookAndFeel.properties.marginRight + ";");
	}
	
	if(this.lookAndFeel.properties.marginBottom !== undefined) {
		wormHelper.writeResponse("margin-bottom: " + this.lookAndFeel.properties.marginBottom + ";");
	}
	
	//padding
	if(this.lookAndFeel.properties.padding !== undefined) {
		wormHelper.writeResponse("padding " + this.lookAndFeel.properties.padding + ";");
	}
	
	if(this.lookAndFeel.properties.paddingTop !== undefined) {
		wormHelper.writeResponse("padding-top: " + this.lookAndFeel.properties.paddingTop + ";");
	}
	
	if(this.lookAndFeel.properties.paddingLeft !== undefined) {
		wormHelper.writeResponse("padding-left: " + this.lookAndFeel.properties.paddingLeft + ";");
	}
	
	if(this.lookAndFeel.properties.paddingRight !== undefined) {
		wormHelper.writeResponse("padding-right: " + this.lookAndFeel.properties.paddingRight + ";");
	}
	
	if(this.lookAndFeel.properties.paddingBottom !== undefined) {
		wormHelper.writeResponse("padding-bottom: " + this.lookAndFeel.properties.paddingBottom + ";");
	}
	
	//border
	if(this.lookAndFeel.properties.border !== undefined) {
		wormHelper.writeResponse("border: " + this.lookAndFeel.properties.border + ";");
	}
	
	if(this.lookAndFeel.properties.borderTop !== undefined) {
		wormHelper.writeResponse("border-top: " + this.lookAndFeel.properties.borderTop + ";");
	}
	
	if(this.lookAndFeel.properties.borderLeft !== undefined) {
		wormHelper.writeResponse("border-left: " + this.lookAndFeel.properties.borderLeft + ";");
	}
	
	if(this.lookAndFeel.properties.borderRight !== undefined) {
		wormHelper.writeResponse("border-right: " + this.lookAndFeel.properties.borderRight + ";");
	}
	
	if(this.lookAndFeel.properties.borderTop !== undefined) {
		wormHelper.writeResponse("border-bottom: " + this.lookAndFeel.properties.borderBottom + ";");
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
		wormHelper.writeResponse("background: " + this.lookAndFeel.properties.background + ";");
	}
	
	if(this.lookAndFeel.properties.backgroundColor !== undefined) {
		wormHelper.writeResponse("background-color: " + this.lookAndFeel.properties.backgroundColor + ";");
	}
	
	if(this.lookAndFeel.properties.backgroundSize !== undefined) {
		wormHelper.writeResponse("background-size: " + this.lookAndFeel.properties.backgroundSize + ";");
	}
	
	if(this.lookAndFeel.properties.backgroundPosition !== undefined) {
		wormHelper.writeResponse("background-position: " + this.lookAndFeel.properties.backgroundPosition + ";");
	}
	
	if(this.lookAndFeel.properties.backgroundAttachment !== undefined) {
		wormHelper.writeResponse("background-attachment: " + this.lookAndFeel.properties.backgroundAttachment + ";");
	}
	
	if(this.lookAndFeel.properties.backgroundRepeat !== undefined) {
		wormHelper.writeResponse("background-repeat: " + this.lookAndFeel.properties.backgroundRepeat + ";");
	}
	
	if(this.lookAndFeel.properties.backgroundImage !== undefined) {
		wormHelper.writeResponse("background-image: " + this.lookAndFeel.properties.backgroundImage + ";");
	}
	
	//color
	if(this.lookAndFeel.properties.color !== undefined) {
		wormHelper.writeResponse("color: " + this.lookAndFeel.properties.color + ";");
	}
	
	//height
	if(this.lookAndFeel.properties.height !== undefined) {
		wormHelper.writeResponse("height: " + this.lookAndFeel.properties.height + ";");
	}
	
	if(this.lookAndFeel.properties.minHeight !== undefined) {
		wormHelper.writeResponse("min-height: " + this.lookAndFeel.properties.minHeight + ";");
	}
	
	if(this.lookAndFeel.properties.maxHeight !== undefined) {
		wormHelper.writeResponse("max-height: " + this.lookAndFeel.properties.minHeight + ";");
	}
	
	//width
	if(this.lookAndFeel.properties.width !== undefined) {
		wormHelper.writeResponse("width: " + this.lookAndFeel.properties.width + ";");
	}
	
	if(this.lookAndFeel.properties.minWidth !== undefined) {
		wormHelper.writeResponse("min-width: " + this.lookAndFeel.properties.minWidth + ";");
	}
	
	if(this.lookAndFeel.properties.maxWidth !== undefined) {
		wormHelper.writeResponse("max-width: " + this.lookAndFeel.properties.maxWidth + ";");
	}
	
	wormHelper.writeResponse("}");
	wormHelper.writeResponse("</style>");
	
};

module.exports = controlBase;