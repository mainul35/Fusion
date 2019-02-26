dashboard = (function () {
    var template = ``
    return {
        content: template,
        initialize: function (container) {
            Fusion.addJS('/contents/js/fusion/fusion.navbar.js')
            setTimeout(function () {
                Fusion.appBody.navbar.initialize(document.getElementById('header'))
            }, 10)
            container.innerHTML = template
        }
    }
}())