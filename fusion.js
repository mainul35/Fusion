Fusion = (function () {

    return {
        initialize: function() {
            Fusion.pages.login.initialize(document.getElementById('root'))
        },
        appBody: document.querySelector("#root"),
        htmlToDOMElement: function (htmlString) {
            return new DOMParser().parseFromString(htmlString, "text/html")
        },
        addCSS: function (cssURL) {
            var link = document.createElement("link")
            link.href = cssURL
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
            script.src = jsURL;
            document.head.appendChild(script);
        }
    };
}())