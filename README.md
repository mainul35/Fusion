# Fusion
A simple JS library for Single Page Application (SPA) development for personal practice projects. It is under development.

#What you can do with it?
* Develop single page applications.
* Add routing to pages.
* Make API calls with fetch request.
* And more, as soon as it becomes more matured.

# Enough talk. How can I do all these stuffs?
1. First of all, download Fusion.
2. Add the following JS library in your page.
    ```<script src="/your_directory/fusion/fusion.js"></script>```
And then initialize Fusion by calling ```Fusion.initialize()``` in your page like below.
    ```
    <script>
        (function () {
            Fusion.initialize()
            setTimeout(function () {
                // TODO ...
            }, 30)
        }())
    </script>
    ```
    > Here, calling the setTimeout() is important because, Fusion has runtime js loading, and completing this may take some time.

    ###### Example
    * Include a JS page where you want to write your business logic.
        ```
            <script src="/your_directory/dashboard/dashboard.js"></script>
        ```
    * Code sample in your imported JS file
        ```
        dashboard = (function () {
            var template = ``
            return {
                content: template,
                initialize: function (container) {
                    container.innerHTML = template
                }
            }
        }())
        ```
    * Now below the Fusion initializaiton, inside timeout funciton call, initialize the dashboard.
        ```
        (function () {
                Fusion.initialize()
                setTimeout(function () {
                    dashboard.initialize(document.getElementById('root'))
                }, 30)
            }())
        ```
        Now, once you refresh your page, you will see it rendering the templates.
        
# Why should I do all these when there are great freamworks like React, Angular & Vue.js?
The 3 key things you are getting in here are -
* You are using virtual DOM.
* You are writing pure JS code, which does not need any transpiler to be used. The code can be directly understood by your browser.
* You can any time refuse to use the library, or modify it or write your own convension on top of this.