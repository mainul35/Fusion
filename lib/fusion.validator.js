/**
 * Form Validator plugin
 * Created by Syed Mainul Hasan
 * github: mainul35
 * Email: mainuls18@gmail.com
 *
 * */

Fusion.Validator = function () {
    var requiredFields = []
    var lengthCheckerArray = []
    var valid = false
    function initializeRequiredFields(form) {
        var requiredInputElements = form.querySelectorAll("input.required")
        Array.from(requiredInputElements).forEach((elem, i) => {
            var messageElem = form.querySelector(`.${elem.name}-invalid-message`)
            elem.addEventListener("focusout", function (e) {
                if (!this.value) {
                    this.style.border = "2px solid #FF0000"
                    if (messageElem) {
                        messageElem.innerText = 'Required'
                        messageElem.style.color = "2px solid #FF0000"
                    }
                    requiredFields[this.name] = false
                }
            })
            elem.addEventListener("input", function (e) {
                if (this.value) {
                    this.style.border = "2px solid #00CA00"
                    requiredFields[this.name] = true
                    if (messageElem) {
                        messageElem.innerText = ''
                    }
                }
            })
        })
    }

    function initializeLengthBehaviors(form) {
        var inputElements = form.querySelectorAll("input")
        Array.from(inputElements).forEach((elem, i) => {
            var messageElem = form.querySelector(`.${elem.name}-invalid-message`)
            var length = elem.getAttribute("length")
            elem.addEventListener("keypress", function (e) {
                if (this.type === 'number') {
                    if (e.which < 48 || e.which > 57) {
                        e.preventDefault();
                    }
                }
            })
            if (length) {
                elem.addEventListener("input", function (e) {
                    var lengthArray = length.split(".")
                    var minLength = lengthArray[0]
                    var maxLength = lengthArray[lengthArray.length - 1]
                    if (this.type === 'number') {
                        if (Number(this.value) < Number(minLength) || Number(this.value) > Number(maxLength)) {
                            lengthCheckerArray[this.name] = false
                            if (messageElem) {
                                messageElem.innerText = 'Range should be between '+minLength + ' - ' +maxLength
                                messageElem.style.color = "2px solid #FF0000"
                            }
                        } else {
                            lengthCheckerArray[this.name] = true
                            if (messageElem) {
                                messageElem.innerText = ''
                            }
                        }
                    } else {
                        if (this.value.length < minLength || this.value.length > maxLength) {
                            lengthCheckerArray[this.name] = false
                            if (messageElem) {
                                messageElem.innerText = 'Range should be between '+minLength + ' - ' +maxLength
                                messageElem.style.color = "2px solid #FF0000"
                            }
                        } else {
                            lengthCheckerArray[this.name] = true
                            if (messageElem) {
                                messageElem.innerText = ''
                            }
                        }
                    }
                    if (lengthCheckerArray[this.name] === true) {
                        this.style.border = "2px solid #00CA00"
                    } else {
                        this.style.border = "2px solid #FF0000"
                        if (messageElem) {
                            messageElem.innerText = 'Range should be between '+minLength + ' - ' +maxLength
                        }
                    }
                })
            }
        })
    }

    function validateForm(form) {
        var requiredInputElements = form.querySelectorAll("input.required")
        var i = 0
        for (i; i < requiredInputElements.length; i++) {
            var messageElem = form.querySelector(`.${elem.name}-invalid-message`)
            if (requiredFields[requiredInputElements[i].name] === true) {
                requiredInputElements[i].style.border = "2px solid #00CA00"
                valid = true
                if (messageElem) {
                    messageElem.innerText = ''
                }
            } else {
                requiredInputElements[i].style.border = "2px solid #FF0000"
                valid = false
                if (messageElem) {
                    messageElem.innerText = 'Required'
                    messageElem.style.color = "2px solid #FF0000"
                }
                break
            }
        }
        var inputElements = form.querySelectorAll("input")
        i = 0
        for (i; i < inputElements.length; i++) {
            var messageElem = form.querySelector(`.${elem.name}-invalid-message`)
            if (lengthCheckerArray[inputElements[i].name] === true) {
                inputElements[i].style.border = "2px solid #00CA00"
                if (messageElem) {
                    messageElem.innerText = ''
                }
                valid = true
            } else {
                inputElements[i].style.border = "2px solid #FF0000"
                if (messageElem) {
                    messageElem.innerText = 'Input does not satisfy range'
                    messageElem.style.color = "2px solid #FF0000"
                }
                valid = false
                break
            }
        }
        return valid === true
    }
    return {
        initialize: function (form) {
            var isFormValid = false
            initializeRequiredFields(form)
            initializeLengthBehaviors(form)
            form.querySelector(".btn-submit").addEventListener("click", function (e) {
                e.preventDefault()
                validateForm(form)
            })
        }
    };
};