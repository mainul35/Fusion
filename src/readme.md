
##Validator Plugin
###Initialization:
```
var validator = new App.Validator()
validator.initialize(document.querySelector("form.add-to-cart-form"))
```
###Classes:
1. required - Any mandatory input should have this class.
2. ${inputElement.name}-invalid-message - This class will have to be added in the span that will show any invalid message.
###Attributes:
1. length - This attribute will have to be added with any input field that requires a length range.
```Example: length='2..10'```
2. type - This is a mandatory attribute for applying length constraint of numeric input types.