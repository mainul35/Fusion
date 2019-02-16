Fusion = (function () {
    return {
        appBody: document.querySelector("#root"),
        htmlToDOMElement: function (htmlString) {
            return new DOMParser().parseFromString(htmlString, "text/html")
        }
    };
}())