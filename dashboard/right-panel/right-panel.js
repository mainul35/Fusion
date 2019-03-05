rightPanel = (function () {
    var template = `
    <div id="right-panel" class="right-panel">
        <div class="breadcrumbs"></div><!-- Header-->
        <div class="content mt-3"></div> <!-- .content -->
    </div>`
    return {
        template: template,
        initialize: function (container) {
            var content = Fusion.htmlToDOMElement(template)
            Fusion.addCSS('/contents/js/fusion/dashboard/right-panel/right-panel.css')
            Fusion.addJS('/contents/js/fusion/dashboard/breadcrumbs/breadcrumbs.js')
            rightPanel.template = container.querySelector('.dashboard').innerHTML = content.querySelector('body').innerHTML
            setTimeout(function () {
                breadcrumbs.initialize(container)
            }, 50)
        }
    }
}())