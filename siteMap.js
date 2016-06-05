module.exports = {
	modulePage : "./wwPages/main.js",	
	pageViewerName : "pageViewer1",
	child : {
		defaultKey : "home",
		childMap : {
			home : {
				modulePage : "./wwPages/home.js"
			},
			stores : {
				modulePage : "./wwPages/stores.js"
			}
		}
	}
}
