login = (function () {
    var template = `
    <link href="/contents/css/login.css" rel="stylesheet" type="text/css"/>
    <div class="align-content-center">
        <div id="global-wrapper">
            <div id="content-wrapper">
                <div class="container">
                    <div class="col-sm-6 col-md-4 mx-auto">
                        <div class="account-wall">
                            <img src="/contents/images/download.png" class="profile-img"/>

                            <form action="/oauth/token" method="post" class="form-signin">
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="text" name="username" class="form-control" required="required"/>
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" class="form-control" required="required"/>
                                </div>
                                <input type="hidden" name="grant_type" value="password"/>
                                <div class="form-group">
                                    <input type="submit" class="btn btn-lg btn-primary btn-block" value="Login" name="submit"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`

    return {
        content: template,
        css: ['/contents/css/login.css'],
        js: [],
        initialize: function (container) {
            var content = Fusion.htmlToDOMElement(template)
            login.css.forEach(function (e) {
                Fusion.addCSS(e)
            })
            login.content = container.innerHTML = content.querySelector('body').innerHTML
            form = container.querySelector('form')
            Fusion.forms.submit(form, function (e) {
                e.preventDefault()
                var serializedForm = Fusion.forms.serialize(form)
                form.action += `?grant_type=${serializedForm.grant_type}&username=${serializedForm.username}&password=${serializedForm.password}`
                Fusion.requestManager.post(form, function (response) {
                        Fusion.addJS('/contents/js/fusion/dashboard/dashboard.js')
                        console.log('dashboard page loaded')
                        document.cookie = `token=${response.access_token}`
                        setTimeout(function () {
                            dashboard.initialize(document.getElementById('root'))
                        }, 50)
                    },
                {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Basic bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0'
                });
            })
        }
    }
}())