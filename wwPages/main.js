var _parent = wormHelper.refreshModule('./worm_scheme/ui_elements/pageBase.js').prototype,
	_proto = main.prototype = Object.create(_parent);
	
var pageViewer = wormHelper.refreshModule('./worm_scheme/ui_elements/pageViewer.js');
var linkButton = wormHelper.refreshModule("./worm_scheme/ui_elements/linkButton.js");

_proto.constructor = main;

function main() {
	_parent.constructor.apply(this);
	
	this.mainViewer = new pageViewer();
	
	this.homeLinkButton = new linkButton();
	this.storesLinkButton = new linkButton();
	this.storesListingLinkButton = new linkButton();
	this.storesSearchLinkButton = new linkButton();
}

_proto.createElements = function() {
	this.homeLinkButton.set("parent", this);
	this.homeLinkButton.set("identifier", "homeLinkButton");
	this.homeLinkButton.set("content", "home");
	this.homeLinkButton.set("hyperTextReference", "Home");
	this.homeLinkButton.set("linkType", linkButton.prototype.linkTypeEnumaration.SiteMap);
	this.homeLinkButton.set("urlRefreshOrdinal", 0);
	
	this.storesLinkButton.set("parent", this);
	this.storesLinkButton.set("identifier", "storesLinkButton");
	this.storesLinkButton.set("content", "stores");
	this.storesLinkButton.set("hyperTextReference", "Stores");
	this.storesLinkButton.set("linkType", linkButton.prototype.linkTypeEnumaration.SiteMap);
	this.storesLinkButton.set("urlRefreshOrdinal", 0);
	
	this.storesListingLinkButton.set("parent", this);
	this.storesListingLinkButton.set("identifier", "storesListingLinkButton");
	this.storesListingLinkButton.set("content", "Listing of Stores");
	this.storesListingLinkButton.set("hyperTextReference", "Stores-Listing");
	this.storesListingLinkButton.set("linkType", linkButton.prototype.linkTypeEnumaration.SiteMap);
	this.storesListingLinkButton.set("urlRefreshOrdinal", 0);
	
	this.storesSearchLinkButton.set("parent", this);
	this.storesSearchLinkButton.set("identifier", "storesSearchLinkButton");
	this.storesSearchLinkButton.set("content", "Search Stores");
	this.storesSearchLinkButton.set("hyperTextReference", "stores-search");
	this.storesSearchLinkButton.set("linkType", linkButton.prototype.linkTypeEnumaration.SiteMap);
	this.storesSearchLinkButton.set("urlRefreshOrdinal", 0);
	
	this.mainViewer.set("identifier", "mainViewer");
	this.mainViewer.set("parent", this);
};


module.exports = main;