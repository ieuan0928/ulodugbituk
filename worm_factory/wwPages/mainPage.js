var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/pageBase.js").prototype,
    _proto = mainPage.prototype = Object.create(_parent);

function mainPage() {
    _parent.constructor.apply(this);
}

_proto.render = function() {
    wormHelper.writeResponse("test ra..");
}


module.exports = mainPage;