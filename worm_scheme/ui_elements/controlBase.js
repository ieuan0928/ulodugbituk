
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
		
		case "margin":
		case "margintop":
		case "marginleft": 
		case "marginright":
		case "marginbottom":
		
		case "padding":
		case "paddingtop":
		case "paddingleft":
		case "paddingright":
		case "paddingbottom":
		
		case "border":
		case "bordertop":
		case "borderleft":
		case "borderright":
		case "borderbottom":
		
		case "bordercolor":
		case "bordercolortop":
		case "bordercolorleft":
		case "bordercolorright":
		case "bordercolorbottom":
		
		case "borderstyle":
		case "bordertopstyle":
		case "borderleftstyle":
		case "borderrightstyle":
		case "borderbottomstyle":
		
		case "borderwidth":
		case "bordertopwidth":
		case "borderleftwidth":
		case "borderrightwidth":
		case "borderbottomwidth":
		
		case "borderradius":
		case "bordertopleftradius":
		case "bordertoprightradius":
		case "borderbottomleftradius":
		case "borderbottomrightradius":
		
		case "background":
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
			return this.properties["className"];
			break;
		case "identifier":
			return this.properties["identifier"];
			break;
		case "name":
			return this.properties["name"];
			break;
		default:
			return _parent.get.call(this, propertyName);
			break;
	}
};

_proto.getClassses = function() {
	
	var classCollection = this.properties["classCollection"]
	var count = 0;
	var classResult = "";
	
	for(count; classCollection[count]; count++)
	{
		
	}
	
};

_proto.render = function() {};
_proto.preRender = function() {};
_proto.postRender = function() {
	
	var classname = this.get("classname");
	
	wormHelper.writeResponse("<style>");
	wormHelper.writeResponse("." + classname + "{}");
	wormHelper.writeResponse("</style>");
	
};

module.exports = controlBase;