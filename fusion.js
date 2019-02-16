Fusion = (function () {

    return {
        initialize: function() {
            Fusion.pages.login.initialize(document.getElementById('root'))
        },
        appBody: document.querySelector("#root"),
        htmlToDOMElement: function (htmlString) {
            return new DOMParser().parseFromString(htmlString, "text/html")
        },
    };
}())