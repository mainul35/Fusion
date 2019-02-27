Fusion.routing = (function () {

    var routes = []
    return {
        addRoute: function (route, content) {
            routes.push({route: route, content: content})
            history.pushState(route.id, route.title, route.path)
            window.addEventListener('popstate', function (event) {
                if (history.state && history.state.id === 'home') {
                    // Render new content for the hompage
                    dashboard.initialize(document.getElementById("root"))
                } else if (history.state && history.state.id === 'login') {
                    // Render new content for the hompage
                    login.initialize(document.getElementById("root"))
                }
            }, false);
        }
    }
}())