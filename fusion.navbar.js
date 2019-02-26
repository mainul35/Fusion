Fusion.appBody.navbar = (function () {

    var items = []
    var template = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
            <!--<form class="form-inline my-2 my-lg-0">-->
                <!--<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">-->
                <!--<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>-->
            <!--</form>-->
        </div>
    </nav>`
    return {
        content: template,
        initialize: function (container) {
            var navContent = Fusion.htmlToDOMElement(template)
            navContent.querySelector(".navbar-nav").innerHTML = ''
            items = [
                {
                    label: "Home",
                    href: "#"
                },
                {
                    label: "Link",
                    href: "#"
                },
            ]

            var element = ''
            items.forEach(function (item) {
                element += Fusion.appBody.navbar.nav.buildItem(item)
            })
            navContent.querySelector(".navbar-nav").innerHTML = element
            container.innerHTML = navContent.querySelector('body').innerHTML
        },
        nav: {
            addItem: function (item) {
                var navContent = document.querySelector(".navbar-nav")
                items.push(item)
                navContent.innerHTML += Fusion.appBody.navbar.nav.buildItem(item)
            },
            buildItem: function (item) {
                var element = ''
                element += '<li class="nav-item">'
                element += `<a class="nav-link" href="${item.href}">${item.label}</a>`
                element += '</li>'
                return element
            }
        }
    }
}());