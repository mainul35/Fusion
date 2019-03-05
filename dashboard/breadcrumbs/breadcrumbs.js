breadcrumbs = (function () {
    var template =
        `
<!--<div class="breadcrumb-content">-->
            <div class="col-sm-4">
                <div class="page-header float-left">
                    <div class="page-title">
                        <h1 class="title-content"></h1>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="page-header float-right">
                    <div class="page-title">
                        <ol class="breadcrumb text-right">
                            <li class="active title-content"></li>
                        </ol>
                    </div>
                </div>
            </div>
        <!--</div>-->
`
    return {
        content: template,
        initialize: function (container) {
            Fusion.addCSS('/contents/js/fusion/dashboard/breadcrumbs/breadcrumbs.css')
            var content = Fusion.htmlToDOMElement(template)
            content.querySelector('.title-content').innerHTML = "Dashboard"
            breadcrumbs.content = container.querySelector('.breadcrumbs').innerHTML = content.querySelector('body').innerHTML
        }
    }
}())