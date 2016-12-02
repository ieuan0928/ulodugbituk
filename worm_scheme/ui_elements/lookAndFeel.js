
var _proto = lookAndFeel.prototype;

_proto.constructor = lookAndFeel;
_proto.properties = null;

function lookAndFeel() {
	this.properties = [];
};

_proto.set = function(propertyName, value) {
	switch(propertyName.trim().toLowerCase()) {
		//margin
		case "margintop":
			this.properties["marginTop"] = value;
			return true;
		case "marginleft":
			this.properties["marginLeft"] = value;
			return true;
		case "marginright":
			this.properties["marginRight"] = value;
			return true;
		case "marginbottom":
			this.properties["marginBottom"] = value;
			return true;

		//padding	
		case "paddingtop":
			this.properties["paddingTop"] = value;
			return true;
		case "paddingleft":
			this.properties["paddingLeft"] = value;
			return true;
		case "paddingright":
			this.properties["paddingRight"] = value;
			return true;
		case "paddingbottom":
			this.properties["paddingBottom"] = value;
			return true;
			
		//border
		case "bordertop":
			this.properties["borderTop"] = value;
			return true;
		case "borderleft":
			this.properties["borderLeft"] = value;
			return true;
		case "borderright":
			this.properties["borderRight"] = value;
			return true;
		case "borderbottom":
			this.properties["borderBottom"] = value;
			return true;

		//border-color
		case "bordercolortop":
			this.properties["borderColorTop"] = value;
			return true;
		case "bordercolorleft":
			this.properties["borderColorLeft"] = value;
			return true;
		case "bordercolorright":
			this.properties["borderColorRight"] = value;
			return true;
		case "bordercolorbottom":
			this.properties["borderColorBottom"] = value;
			return true;
		
		//border-style
		case "bordertopstyle":
			this.properties["borderTopStyle"] = value;
			return true;
		case "borderleftstyle":
			this.properties["borderLeftStyle"] = value;
			return true;
		case "borderrightstyle":
			this.properties["borderRightStyle"] = value;
			return true;
		case "borderbottomstyle":
			this.properties["borderBottomStyle"] = value;
			return true;
		
		//border-width
		case "bordertopwidth":
			this.properties["borderTopWidth"] = value;
			return true;
		case "borderleftwidth":
			this.properties["borderLeftWidth"] = value;
			return true;
		case "borderrightwidth":
			this.properties["borderRightWidth"] = value;
			return true;
		case "borderBottomwidth":
			this.properties["borderBottomWidth"] = value;
			return true;
		
		//border-radius
		case "bordertopleftradius":
			this.properties["borderTopLeftRadius"] = value;
			return true;
		case "bordertoprightradius":
			this.properties["borderTopRightRadius"] = value;
			return true;
		case "borderbottomleftradius":
			this.properties["borderBottomLeftRadius"] = value;
			return true;
		case "borderbottomrightradius":
			this.properties["borderBottomRightRadius"] = value;
			return true;
		
		//background
		case "backgroundcolor":
			this.properties["backgroundColor"] = value;
			return true;
		case "backgroundsize":
			this.properties["backgroundSize"] = value;
			return true;
		case "backgroundposition":
			this.properties["backgroundPosition"] = value;
			return true;
		case "backgroundattachment":
			this.properties["backgroundAttachment"] = value;
			return true;
		case "backgroundrepeat":
			this.properties["backgroundRepeat"] = value;
			return true;
		case "backgroundimage":
			this.properties["backgroundImage"] = value;
			return true;
		
		//color
		case "color":
			this.properties["color"] = value;
			return true;
		
		//height
		case "height":
			this.properties["height"] = value;
			return true;
		case "minheight":
			this.properties["minHeight"] = value;
			return true;
		case "maxheight":
			this.properties["maxHeight"] = value;
			return true;
		
		//width
		case "width":
			this.properties["width"] = value;
			return true;
		case "minheight":
			this.properties["minWidth"] = value;
			return true;
		case "maxheight":
			this.properties["maxWidth"] = value;
			return true;

		//gradient
		case "lineargradient":
			this.properties["linearGradient"] = value;
			return true;
		case "radialgradient":
			this.properties["radialGradient"] = value;
			return true;
		case "repeatinglineargradient":
			this.properties["repeatingLinearGradient"] = value;
			return true;
		case "repeatingradialgradient":
			this.properties["repeatingRadialGradient"] = value;
			return true;
		
		//opacity
		case "opacity":
			this.properties["opacity"] = value;
			return true;
		
		//overflow
		case "overflow":
			this.properties["opacity"] = value;
			return true;
		case "overflowx":
			this.properties["overflowX"] = value;
			return true;
		case "overflowy":
			this.properties["overflowY"] = value;
			return true;
			
		//visibility and display
		case "visibility":
			this.properties["visibility"] = value;
			return true;
		case "display":
			this.properties["display"] = value;
			return true;
			
		//vertical-align
		case "verticalalign":
			this.properties["verticalAlign"] = value;
			return true;

		//z-index
		case "zindex":
			this.properties["zindex"] = value;
			return true;
		
		//text
		case "textdecoration":
			this.properties["textDecoration"] = value;
			return true;
		case "fontsize":
			this.properties["fontSize"] = value;
			return true;
		case "fontfamily":	
			this.properties["fontFamily"] = value;
			return true;
		case "fontstyle":	
			this.properties["fontStyle"] = value;
			return true;
		case "fontvariant":
			this.properties["fontVariant"] = value;
			return true;
		case "fontweight":
			this.properties["fontWeight"] = value;
			return true;
		case "atfontface":
			this.properties["atFontFace"] = value;
			return true;
			
		//list
		case "liststyle":
			this.properties["listStyle"] = value;
			return true;
		case "liststyleimage":	
			this.properties["listStyleImage"] = value;
			return true;
		case "liststyleposition":
			this.properties["listStylePosition"] = value;
			return true;
		case "liststyletype":
			this.properties["listStyleType"] = value;
			return true;
			
		//cursor
		case "cursor":
			this.properties["cursor"] = value;
			return true;
			
		default:
			return true;
	}
};

module.exports = lookAndFeel;