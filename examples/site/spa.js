var SPA = (function () {
    return {
        initialize: function (panel) {
            Fusion.RequestManager.loader.addLoading(panel.querySelector(".content-pane"))
            var requestMetadataElem = panel.querySelector("content-loading-metadata")
            var requestUrl = requestMetadataElem.getAttribute("metadata-url")
            var object = requestMetadataElem.getAttribute("object")
            var hasParam = requestMetadataElem.getAttribute("hasParam")
            Fusion.RequestManager.loadContentAfterDomReady(panel, requestUrl, function (container, data) {
                Fusion.RequestManager.loader.removeLoading(container.querySelector(".content-pane"))
                if (hasParam === "true") {
                    var obj = new window[object]()
                    obj.initialize(container, data)
                } else {
                    var obj = new window[object]()
                    obj.initialize(container)
                }
            })
        }
    }
}().initialize(document.querySelector(".container")))