Fusion.routing = (function () {
    return {
        addRoute: function (id, dom, title, url) {
            history.pushState(id, title, url)
            window.addEventListener('popstate', function (evt) {
                
            })
        }


    }
}())