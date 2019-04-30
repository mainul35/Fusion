var Form = (function (props) {

    var formElement = App.htmlToDOMElement(`
        <form submit-to="${props.action ? props.action : ''} ${props.enableMultipart == true ? "enctype='multipart/form-data'" : ''}"></form>
    `)

    return {
        innerHtml: '',
        addField: function(element){
            this.innerHtml += App.domEmelentToHTML(element)
            console.log(this.innerHtml)
            return this
        },
        addSubmitButton: function(element){
            this.innerHtml += App.domEmelentToHTML(element)
            console.log(this.innerHtml)
            return this
        },
        build: function () {
            formElement.querySelector("form").innerHTML = this.innerHtml
            return formElement.querySelector("body").innerHTML
        }
    }
})

/**
 * @param props.id Field ID
 * @param props.class Field classes as String
 * @param props.title Field Title
 * @param props.title Field Title
 * @param props.type Field type
 * @param props.name Field name
 * @param props.value Field value
 * @param props.placeholder Field Placeholder
 * @param props.disabled If the field is disabled
 * */
var TextBox = (function (props) {
    return App.htmlToDOMElement(`<div class="form-group">
        <label class="col-md-2 control-label" for="${props.id ? props.id : ''}">${props.title ? props.title : ''}</label>
        <div class="col-md-8">
            <input type="${props.type ? props.type : 'text'}" name="${props.name ? props.name : ''}" class="form-control ${props.class ? props.class : ''}" id="${props.id}"
                   value="${props.value ? props.value : ''}" ${props.required ? 'required' : ''}" placeholder="${props.placeholder ? props.placeholder : ''}" ${props.disabled ? 'disabled' : ''}/>
            <span class="help-block">${props.notification ? props.notification : ''}</span>
        </div>
    </div>`)
})

var RadioGroup = (function (props) {
    var innerTemplate = function (props) {
        var template = ''
        if (props.items) {
            props.items.forEach(function (item) {
                template +=   `<label><input value="${item.id ? item.id :''}" type="checkbox" name="${props.name ? props.name : ''}"
                            ${item.isChecked == true ? 'checked' : ''}/> ${item.value ? item.value : ''} </label>`
            })
        }
        return template
    }
    return App.htmlToDOMElement(`<div class="form-group">
                <label class="col-md-2 control-label">${props.title ? props.title : ''}</label>
                <div class="col-md-8"> ${ innerTemplate(props.items) } <span
                        class="help-block">${props.notification ? props.notification : ''}</span>
                </div>
            </div>`)
})

var CheckBoxGroup = (function (props) {
    var innerTemplate = function (props) {
        var template = ''
        if (props.items) {
            props.items.forEach(function (item) {
                template +=   `<label><input value="${item.id ? item.id :''}" type="checkbox" name="${props.name ? props.name : ''}"
                            checked="${item.isChecked == true ? checked : ''}"/> ${item.value ? item.value : ''} </label>`
            })
        }
        return template
    }
    return App.htmlToDOMElement(`<div class="form-group">
                <label class="col-md-2 control-label">${props.title ? props.title : ''}</label>
                <div class="col-md-8">${ innerTemplate(props.items) }<span class="help-block">${props.notification ? props.notification : ''}</span>
                </div>
            </div>`)
})

var SelectFromOptions = (function (props) {
    var innerTemplate = function (props) {
        var template = ''
        if (props.options) {
            props.options.forEach(function (option) {
                template += `<option value="${option.key}">${option.value}</option>`
            })
        }
        return template
    }
    return App.htmlToDOMElement(`<div class="form-group">
                <label class="col-md-2 control-label">${props.title ? props.title : ''}</label>
                <div class="col-md-8"><select id = "${props.id ? props.id : ''}" name = "${props.name ? props.name : ''}"
                            class="form-control">${ innerTemplate(props) }</select><span class="help-block">${props.notification ? props.notification : ''}</span>
                </div>
            </div>`)
})

var SubmitButton = (function (props) {
    return App.htmlToDOMElement(`<button type="submit" class="btn ${props.class}" onsubmit="${props.action}">${props.value}</button>`)
})

var TextArea = (function (props) {
    return App.htmlToDOMElement(`<div class="form-group">
                <label class="col-md-2 control-label" for="description">${props.title ? props.title : ''}</label>
                <div class="col-md-8">
							<textarea name="${props.name ? props.name : ''}" rows="${props.rows ? props.rows : 5}" class="form-control"
                                      id="${props.id ? props.id : ''}" value="${props.value ? props.value : ''}"
                                      placeholder="${props.placeholder ? props.placeholder : ''}"> </textarea>
                    <span class="help-block">${props.notification ? props.notification : ''}</span>
                </div>
            </div>`)
})

var FileField = (function (props) {
    return App.htmlToDOMElement(`<div class="form-group">
                <label class="col-md-2 control-label" for="${props.id ? props.id : ''}">${props.title ? props.title : ''}</label>
                <div class="col-md-8">
                    <input id="${props.id ? props.id : ''}" type="file" name="${props.name ? props.name : ''}" accept="${props.accept ? props.accept : 'images/*'}"/>
                </div>
            </div>`)
})