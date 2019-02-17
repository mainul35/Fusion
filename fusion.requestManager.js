Fusion.requestManager = (function () {
    var eventQue = []

    return {
        post: function (form, callback, headers = {}) {
            var url = form.getAttribute('action')
            var data = Fusion.forms.serialize(form);
            console.log(Fusion.forms.serialize(form))
            fetch(url, {
                method: 'POST', // or 'PUT'
                body: data, // data can be `string` or {object}!
                headers: headers
            }).then(res => res.json())
                .then(response => callback(response))
                .catch(error => console.error('Error:', error));
        },
    }
}())