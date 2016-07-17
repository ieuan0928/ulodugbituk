module.exports = {
	modulePage : "./wwPages/main.js",	
	pageViewerName : "mainViewer",
	child : {
		defaultKey : "home",
		childMap : {
			home : {
				modulePage : "./wwPages/home.js"
			},
			stores : {
				modulePage : "./wwPages/stores.js",
				pageViewerName : "pageViewer1",
				child : {
					defaultKey : "listing",
					childMap : {
						listing : {
							modulePage : "./wwPages/allStores.js"
						},
						search : {
							modulePage : "./wwPages/searchStores.js"
						} 
					}
				}
			}
		}
	},
	errorModulePage : "./wwPages/error.js"
}
