Fusion.requestManager = (function () {
    var eventQue = []

    return {
        post: function (url, data, callback) {
            var url = url;
            var data = data;

            fetch(url, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .then(response => callback)
                .catch(error => console.error('Error:', error));
        },
    }
})