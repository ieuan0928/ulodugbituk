
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
			break;
		case "marginleft":
			this.properties["marginLeft"] = value;
			return true;
			break;
		case "marginright":
			this.properties["marginRight"] = value;
			return true;
			break;
		case "marginbottom":
			this.properties["marginBottom"] = value;
			return true;
			break;	
			
		//padding	
		case "paddingtop":
			this.properties["paddingTop"] = value;
			return true;
			break;
		case "paddingleft":
			this.properties["paddingLeft"] = value;
			return true;
			break;
		case "paddingright":
			this.properties["paddingRight"] = value;
			return true;
			break;
		case "paddingbottom":
			this.properties["paddingBottom"] = value;
			return true;
			break;
			
		//border
		case "bordertop":
			this.properties["borderTop"] = value;
			return true;
			break;
		case "borderleft":
			this.properties["borderLeft"] = value;
			return true;
			break;
		case "borderright":
			this.properties["borderRight"] = value;
			return true;
			break;
		case "borderbottom":
			this.properties["borderBottom"] = value;
			return true;
			break;
		
		//border-color
		case "bordercolortop":
			this.properties["borderColorTop"] = value;
			return true;
			break;
		case "bordercolorleft":
			this.properties["borderColorLeft"] = value;
			return true;
			break;
		case "bordercolorright":
			this.properties["borderColorRight"] = value;
			return true;
			break;
		case "bordercolorbottom":
			this.properties["borderColorBottom"] = value;
			return true;
			break;
		
		//border-style
		case "bordertopstyle":
			this.properties["borderTopStyle"] = value;
			return true;
			break;
		case "borderleftstyle":
			this.properties["borderLeftStyle"] = value;
			return true;
			break;
		case "borderrightstyle":
			this.properties["borderRightStyle"] = value;
			return true;
			break;
		case "borderbottomstyle":
			this.properties["borderBottomStyle"] = value;
			return true;
			break;
		
		//border-width
		case "bordertopwidth":
			this.properties["borderTopWidth"] = value;
			return true;
			break;
		case "borderleftwidth":
			this.properties["borderLeftWidth"] = value;
			return true;
			break;
		case "borderrightwidth":
			this.properties["borderRightWidth"] = value;
			return true;
			break;
		case "borderBottomwidth":
			this.properties["borderBottomWidth"] = value;
			return true;
			break;
		
		//border-radius
		case "bordertopleftradius":
			this.properties["borderTopLeftRadius"] = value;
			return true;
			break;
		case "bordertoprightradius":
			this.properties["borderTopRightRadius"] = value;
			return true;
			break;
		case "borderbottomleftradius":
			this.properties["borderBottomLeftRadius"] = value;
			return true;
			break;
		case "borderbottomrightradius":
			this.properties["borderBottomRightRadius"] = value;
			return true;
			break;
		
		//background
		case "backgroundcolor":
			this.properties["backgroundColor"] = value;
			return true;
			break;
		case "backgroundsize":
			this.properties["backgroundSize"] = value;
			return true;
			break;
		case "backgroundposition":
			this.properties["backgroundPosition"] = value;
			return true;
			break;
		case "backgroundattachment":
			this.properties["backgroundAttachment"] = value;
			return true;
			break;
		case "backgroundrepeat":
			this.properties["backgroundRepeat"] = value;
			return true;
			break;
		case "backgroundimage":
			this.properties["backgroundImage"] = value;
			return true;
			break;
		
		//color
		case "color":
			this.properties["color"] = value;
			return true;
			break;
		
		//height
		case "height":
			this.properties["height"] = value;
			return true;
			break;
		case "minheight":
			this.properties["minHeight"] = value;
			return true;
			break;
		case "maxheight":
			this.properties["maxHeight"] = value;
			return true;
			break;
		
		//width
		case "width":
			this.properties["width"] = value;
			return true;
			break;
		case "minheight":
			this.properties["minWidth"] = value;
			return true;
			break;
		case "maxheight":
			this.properties["maxWidth"] = value;
			return true;
			break;
		
		//gradient
		case "lineargradient":
			this.properties["linearGradient"] = value;
			return true;
			break;
		case "radialgradient":
			this.properties["radialGradient"] = value;
			return true;
			break;
		case "repeatinglineargradient":
			this.properties["repeatingLinearGradient"] = value;
			return true;
			break;
		case "repeatingradialgradient":
			this.properties["repeatingRadialGradient"] = value;
			return true;
			break;
		
		//opacity
		case "opacity":
			this.properties["opacity"] = value;
			return true;
			break;
		
		//overflow
		case "overflow":
			this.properties["opacity"] = value;
			return true;
			break;
		case "overflowx":
			this.properties["overflowX"] = value;
			return true;
			break;
		case "overflowy":
			this.properties["overflowY"] = value;
			return true;
			break;
			
		//visibility and display
		case "visibility":
			this.properties["visibility"] = value;
			return true;
			break;
		case "display":
			this.properties["display"] = value;
			return true;
			break;
			
		//vertical-align
		case "verticalalign":
			this.properties["verticalAlign"] = value;
			return true;
			break;
			
		//z-index
		case "zindex":
			this.properties["zindex"] = value;
			return true;
			break;
		
		//text
		case "textdecoration":
			this.properties["textDecoration"] = value;
			return true;
			break;
		case "fontsize":
			this.properties["fontSize"] = value;
			return true;
			break;
		case "fontfamily":	
			this.properties["fontFamily"] = value;
			return true;
			break;
		case "fontstyle":	
			this.properties["fontStyle"] = value;
			return true;
			break;
		case "fontvariant":
			this.properties["fontVariant"] = value;
			return true;
			break;
		case "fontweight":
			this.properties["fontWeight"] = value;
			return true;
			break;
		case "atfontface":
			this.properties["atFontFace"] = value;
			return true;
			break;
			
		//list
		case "liststyle":
			this.properties["listStyle"] = value;
			return true;
			break;
		case "liststyleimage":	
			this.properties["listStyleImage"] = value;
			return true;
			break;
		case "liststyleposition":
			this.properties["listStylePosition"] = value;
			return true;
			break;
		case "liststyletype":
			this.properties["listStyleType"] = value;
			return true;
			break;	
			
		//cursor
		case "cursor":
			this.properties["cursor"] = value;
			return true;
			break;
			
		default:
			return true;
			break;
	}
};

module.exports = lookAndFeel;