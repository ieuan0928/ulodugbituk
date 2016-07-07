var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/pageBase.js").prototype,
	_proto = stores.prototype = Object.create(_parent);

var pageViewer = wormHelper.refreshModule("./worm_scheme/ui_elements/pageViewer.js");
var linkButton = wormHelper.refreshModule("./worm_scheme/ui_elements/linkButton.js");

_proto.constructor = stores;

function stores() {
	_parent.constructor.apply(this);
	
	this.pageViewer1 = new pageViewer();
	this.storesListingLinkButton = new linkButton();
	this.storesSearchLinkButton = new linkButton();
}

_proto.pageViewer1 = null;

_proto.createElements = function() {
	this.pageViewer1.set("parent", this);
	this.pageViewer1.set("identifier", "pageViewer1");
	
	this.storesListingLinkButton.set("parent", this);
	this.storesListingLinkButton.set("identifier", "stores_ListingLinkButton");
	this.storesListingLinkButton.set("hyperTextReference", "stores-listing");
	this.storesListingLinkButton.set("content", "Listing of Stores");
	this.storesListingLinkButton.set("linkType", linkButton.prototype.linkTypeEnumaration.SiteMap);
	
	this.storesSearchLinkButton.set("parent", this);
	this.storesSearchLinkButton.set("identifier", "stores_SearchLinkButton");
	this.storesSearchLinkButton.set("hyperTextReference", "stores-search");
	this.storesSearchLinkButton.set("content", "storesSearchLinkButton");
	this.storesSearchLinkButton.set("linkType", linkButton.prototype.linkTypeEnumaration.SiteMap);
}

module.exports = stores;