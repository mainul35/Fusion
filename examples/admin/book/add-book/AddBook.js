AddBook = (function () {
    var templateForm = ``
    return {
        initialize: function (panel) {
            // Fusion.RequestManager.addLoading(panel)
            // var bookName = new TextBox({id: 'bookTitle', title: 'Title', name: 'title', required: true})
            // var author = new TextBox({id: 'author', title: 'Author', name: 'author', required: true})
            // var isbn = new TextBox({id: 'isbn', title: 'ISBN', name: 'isbn'})
            // var publisher = new TextBox({id: 'publisher', title: 'ISBN', name: 'publisher'})
            // var publicationDate = new TextBox({})
            // var availableLanguages = new SelectFromOptions({})
            // var availableCategories = new SelectFromOptions({})
            // var availableFormats = new SelectFromOptions({})
            // var totalPages = new TextBox({})
            // var price = new TextBox({})
            // var status = new CheckBoxGroup({})
            // var description = new TextArea({})
            // var image = new FileField({})
            // var submitButton = new SubmitButton({})
            //
            // var formTemplate = new Form({action: '/admin/boook/addBook', enableMultipart: true})
            //     .addField(bookName)
            //     .addField(author)
            //     .addField(isbn)
            //     .addField(publisher)
            //     .addField(publicationDate)
            //     .addField(availableLanguages)
            //     .addField(availableCategories)
            //     .addField(availableFormats)
            //     .addField(totalPages)
            //     .addField(price)
            //     .addField(status)
            //     .addField(description)
            //     .addField(image)
            //     .addField(submitButton)
            //     .build()
            // Fusion.RequestManager.removeLoading(panel)
            // // panel.innerHTML = formTemplate

            $('#category').select2();
            var dateToday = new Date();
            $("#publicationDate")
            .datepicker({
                minDate : dateToday,
                dateFormat : "d/m/yy"
            });
        }
    }
}())
// Fusion.Forms.submit(form, function (e) {
//     e.preventDefault()
//     var serializedForm = Fusion.forms.serialize(form)
//     form.action += `?grant_type=${serializedForm.grant_type}&username=${serializedForm.username}&password=${serializedForm.password}`
//     Fusion.RequestManager.post(form, function (response) {
//             Fusion.addJS('src/dashboard/dashboard.js')
//             console.log('dashboard page loaded')
//             document.cookie = `token=${response.access_token}`
//             setTimeout(function () {
//                 dashboard.initialize(document.getElementById('root'))
//             }, 50)
//         },
//         {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//             'Authorization': 'Basic bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0'
//         });
// })