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
                    routes.forEach(function (r) {
                        if (r.route.path === path) {
                            r.content.initialize(document.getElementById("root"))
                            history.pushState(r.route.id, r.route.title ? r.route.title : r.route.id, r.route.path)
                        } else {
                            console.log('Path did not match...')
                        }
                    })
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