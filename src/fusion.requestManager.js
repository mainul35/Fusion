Fusion.RequestManager = (function () {
    return {
        loadContent: function (container, path, event = null) {
            container.onload = function () {
                $.get( path, function( data ) {
                    Fusion.RequestManager.loader.removeLoading(container);
                    if (event === null) container.innerHTML = data
                    else event(container, data)
                }).fail(function(data) {
                    container.innerHTML = "<p>Failed to process your request.</p>";
                });
            }
        },

        loadContentAfterDomReady: function(container, path, event = null){
            $.get( path, function( data ) {
                Fusion.RequestManager.loader.removeLoading(container);
                if (event === null) container.innerHTML = data
                else event(container, data)
            }).fail(function(data) {
                container.innerHTML = "<p>Failed to process your request.</p>";
            });
        },

        handleRouting: function () {
            var routes = document.getElementsByTagName("a")
            for(var i = 0; i< routes.length; i++){
                routes[i].onclick = function () {
                    var path = this.getAttribute('path')
                    var contentPane  = document.querySelector('.content-pane')
                    if (path !== null) {
                        history.pushState(path, '', path);
                        Fusion.RequestManager.loader.addLoading(contentPane)
                        $.get( path, function( data ) {
                            var elem = Fusion.htmlToDOMElement(data)
                            var jsList = elem.getElementsByTagName("script")
                            Fusion.reloadJsInContent(jsList)
                            Fusion.RequestManager.loader.removeLoading(contentPane)
                            contentPane.innerHTML = data;
                        }).fail(function(data) {
                            contentPane.innerHTML = "<p>Failed to process your request.</p>";
                        });
                    }
                }
            }
        },
        post: function (form, callback, headers = {}) {
            var url = form.getAttribute('action')
            var data = Fusion.Forms.serialize(form);
            console.log(Fusion.Forms.serialize(form))
            fetch(url, {
                method: 'POST', // or 'PUT'
                body: data, // data can be `string` or {object}!
                headers: headers
            }).then(res => res.json())
                .then(response => callback(response))
                .catch(error => {
                    if (error.status == 404) {
                        console.log('not found')
                    }
                    console.error('Error:', error)
                });
        },

        loader: {
            addLoading: function (panel) {
                var loading = "<div class='loader'></div>";
                panel.innerHTML = loading;
            },

            removeLoading: function (panel) {
                if (panel.querySelector('.loader') !== null) {
                    panel.querySelector('.loader').remove();
                }
            }
        },
    }
}());