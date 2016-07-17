module.exports = {
    hostNames: [
        "localhost:3000"
    ], 
    default: "www",
    subDomains: {
        www : {
            index: "./wormIndex.js",
            siteMap: "./siteMap.js"
        },
        factory : {
            index: "./worm_factory/wormIndex.js",
            siteMap: "./worm_factory/siteMap.js"
        }
    }
}