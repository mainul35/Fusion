var ProductDisplay = (function () {
    var itemTemplate = `
    <div class="col-md-3 col-sm-6 product-template">
        <div class="product-grid2">
            <div class="product-image2">
                <a>
                    <img class="pic-1 product-img" src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-1.jpeg"/>
                </a>
                <ul class="social">
                    <li><a class="quick-view" data-tip="Quick View"><i class="fa fa-eye"></i></a></li>
                    <li><a  class="add-to-wishlist" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                    <li><a  class="add-to-cart" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
                <a class="add-to-cart">Add to cart</a>
            </div>
            <div class="product-content">
                <h3 class="title"><a class="product-title" href="#">Women's Designer Top</a></h3>
                <span class="price">$599.99</span>
            </div>
        </div>
    </div>
`

    function bindEvents(panel, dataList) {
        // Array.from(jsList).forEach(
        var elemList = document.querySelectorAll(".product-template")
        Array.from(elemList).forEach(function (elem, i) {
            elem.querySelector(".quick-view").addEventListener("click", function (e) {
                var id = this.getAttribute("product-id")
                var data = {}
                for (var i = 0; i < dataList.length; i++) {
                    if (dataList[i].id == id) {
                        data = dataList[i]
                        break
                    }
                }
                var details = new ProductDetails()
                details.initialize(panel, data)
                history.pushState(id, "Book | "+data.title, "/site/books/"+id)
            })

            elem.querySelector(".product-title").addEventListener("click", function (e) {
                var id = this.getAttribute("product-id")
                var data = {}
                for (var i = 0; i < dataList.length; i++) {
                    if (dataList[i].id == id) {
                        data = dataList[i]
                        break
                    }
                }
                var details = new ProductDetails()
                details.initialize(panel, data)
                history.pushState(id, "Book | "+data.title, "/site/books/"+id)
            })
        })
    }
    return {
        initialize: function (panel) {
            Fusion.addCSS("app/src/site/product-details/ProductDetails.css")
            Fusion.addJS("app/src/site/product-details/ProductDetails.js")
            Fusion.RequestManager.loader.addLoading(panel)
            Fusion.RequestManager.loadContentAfterDomReady(panel, '/book/all', function (container, books) {
                var tempTemplate = ""
                books.forEach(function (book) {
                    var element = Fusion.htmlToDOMElement(itemTemplate)
                    element.querySelector(".product-img").setAttribute("src", `/image?imgId=${book.photo.id}&size=240`)
                    element.querySelector(".product-template").setAttribute("id", "product-template"+book.id)
                    element.querySelector(".quick-view").setAttribute("product-id", book.id)
                    element.querySelector(".add-to-wishlist").setAttribute("product-id", book.id)
                    element.querySelector(".add-to-cart").setAttribute("product-id", book.id)
                    var productTitleElement = element.querySelector(".product-title")
                    productTitleElement.setAttribute("product-id", book.id)
                    productTitleElement.innerHTML = book.title
                    var priceElement = element.querySelector(".price")
                    priceElement.setAttribute("product-id", book.id)
                    priceElement.innerHTML = "$ "+book.originalPrice
                    tempTemplate += Fusion.domEmelentToHTML(element)
                })
                panel.innerHTML = tempTemplate
                bindEvents(panel, books)
            })
        },
    }
})

