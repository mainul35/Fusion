Fusion = (function () {
    return {
        contextPath: '/contents/js/',
        routing: {},
        initialize: function() {
            Fusion.addJS(`lib/fusion/fusion.forms.js`)
            Fusion.addJS(`lib/fusion/fusion.navbar.js`)
            Fusion.addJS(`lib/fusion/fusion.pages.js`)
            Fusion.addJS(`lib/fusion/fusion.requestManager.js`)
            Fusion.addJS(`lib/fusion/fusion.routing.js`)

            // window.onbeforeunload = function (e) {
            //     return false
            // }
        },
        appBody: document.querySelector("#root"),
        htmlToDOMElement: function (htmlString) {
            return new DOMParser().parseFromString(htmlString, "text/html")
        },
        addCSS: function (cssURL) {
            var link = document.createElement("link")
            link.href = Fusion.contextPath + cssURL
            link.type = "text/css";
            link.rel = "stylesheet";
            document.head.appendChild( link )
        },
        addJS: function (jsURL) {
            var script = document.createElement('script');
            script.onload = function () {
                //TODO
                console.log('loading js: ' + jsURL)
            };
            script.src = Fusion.contextPath + jsURL;
            document.head.appendChild(script);
        }
    };
}())