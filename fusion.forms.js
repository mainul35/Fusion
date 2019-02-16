Fusion.forms = (function () {
    return {
        serialize: function (form) {
            const values = {};
            const inputs = form.elements;

            for (let i = 0; i < inputs.length; i++) {
                values[inputs[i].name] = inputs[i].value;
            }
            return values;
        }
    }
}())