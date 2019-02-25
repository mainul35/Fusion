Fusion = (function () {
    let contextPath = '/contents/js/fusion/'
    return {
        initialize: function() {
            Fusion.addJS(`${contextPath}fusion.forms.js`)
            Fusion.addJS(`${contextPath}fusion.navbar.js`)
            Fusion.addJS(`${contextPath}fusion.pages.js`)
            Fusion.addJS(`${contextPath}fusion.requestManager.js`)
            Fusion.addJS(`${contextPath}fusion.routing.js`)
            setTimeout(function () {
                Fusion.pages.login.initialize(document.getElementById('root'))
            }, 10)
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