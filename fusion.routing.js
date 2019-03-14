Fusion.routing = (function () {

    var routes = []
    return {
        routes: routes,
        addRoute: function (route, templateObject) {
            routes.push({route: route, content: templateObject})
            let routeTags = document.getElementsByTagName('route')
            for(let i = 0; i < routeTags.length; i++) {
                routeTags[i].addEventListener("click", function (e) {
                    e.preventDefault()
                    let path = this.getAttribute('path')
                    for (var i = 0; i < routes.length; i++) {
                        if (routes[i].route.path === path) {
                            routes[i].content.initialize(document.getElementById("root"))
                            history.pushState(routes[i].route.id, routes[i].route.title ? routes[i].route.title : routes[i].route.id, routes[i].route.path)
                            break
                        } else {
                            console.log('Path did not match...')
                        }
                    }
                })
            }
            // window.addEventListener('popstate', function (event) {
            //     if (history.state && history.state.id === 'home') {
            //         dashboard.initialize(document.getElementById("root"))
            //     } else if (history.state && history.state.id === 'login') {
            //         login.initialize(document.getElementById("root"))
            //     }
            // }, false);
        }
    }
}())