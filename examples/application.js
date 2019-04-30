application = (function () {
    return {
        initialize: function () {
            navbar.initialize();
            var contentPane = document.querySelector(".content-pane")
            Fusion.RequestManager.handleRouting();
            if (document.querySelector("requestPath") !== null) {
                var path = document.querySelector("requestPath").getAttribute("path");
                if (path) {
                    Fusion.RequestManager.loader.addLoading(contentPane);
                    Fusion.RequestManager.loadContent(document.querySelector("body"), path, function (container, data) {
                        ontentPane = container.querySelector(".content-pane")
                        var elem = Fusion.htmlToDOMElement(data)
                        var jsList = elem.getElementsByTagName("script")
                        Fusion.reloadJsInContent(jsList)
                        contentPane.innerHTML = data
                    });
                }
            }
            history.pushState(document.location.pathname, 'Admin Dashboard', document.location.pathname);
        }
    }
}().initialize());