var ProductDetails = (function () {
    var detailsTemplate = `
      <div class="col-lg-12">
        <div class="card mb-10">
          <div class="card-header">
            <nav class="header-navigation">
              <a href="#" class="btn btn-link">Back to the list</a>

              <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page">Books</li>
              </ol>

              <div class="btn-group">
                <a href="#" class="btn btn-link btn-share">Share</a>
                <a href="#" class="btn btn-link">Sell item like this</a>
              </div>
            </nav>
          </div>
          <div class="card-body store-body">
            <div class="product-info">
              <div class="product-gallery">
                <div class="product-gallery-thumbnails">
                  <ol class="thumbnails-list list-unstyled">
                    <li><img class="img-thumb" src="https://via.placeholder.com/350x350/ffcf5b" alt=""></li>
                  </ol>
                </div>
                <div class="product-gallery-featured">
                  <img src="https://via.placeholder.com/350x350/ffcf5b" alt="">
                </div>
              </div>
              <div class="product-seller-recommended">
                <!-- /.recommended-items-->
                <p class="mb-5 mt-5"><a href="#">See all ads from this seller</a></p>
                <div class="product-description mb-5">
                  <h2 class="mb-5">Description</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit nemo reiciendis quisquam a quis delectus consectetur ipsa eligendi aliquam earum in vitae voluptate ratione fugiat similique nostrum debitis dolor, ipsam quo officiis quas
                    necessitatibus? Magnam eveniet iure, eligendi est ullam consectetur repellat quis doloremque ad perspiciatis assumenda ducimus distinctio quaerat sit repudiandae illo praesentium modi dolor. Veritatis aperiam, minima natus assumenda
                    ipsum voluptatem reprehenderit? Possimus nobis, voluptate, blanditiis, temporibus ad nostrum corrupti quos corporis voluptas tempora aliquid magnam quia voluptatem rerum odit fugiat facere necessitatibus adipisci sunt. Veritatis architecto,
                    perferendis labore sit nobis eaque perspiciatis et iusto, in doloribus est!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vel reiciendis voluptatibus assumenda tempora vitae aut adipisci harum, corporis in id perferendis quia repellat reprehenderit temporibus aspernatur ab ullam magni error
                    consectetur, facilis inventore ipsum, veniam voluptas. Error laboriosam atque quisquam facere esse repellat consectetur quos eum, quaerat blanditiis saepe?</p>
                </div>
                <div class="product-faq mb-5">
                  <h2 class="mb-3">Questions and Answers</h2>
                  <p class="text-muted">What information do you need?</p>
                  <div class="main-questions d-inline" data-container="body" data-toggle="popover" data-placement="right" data-content="Are you in doubt? these shortcuts can help you!">
                    <a href="#" class="btn btn-outline-primary">Cost and Delivery time</a>
                    <a href="#" class="btn btn-outline-primary">Warranty</a>
                    <a href="#" class="btn btn-outline-primary">Payment options</a>
                  </div>
                </div>
                <div class="product-comments">
                  <h5 class="mb-2">Or ask to David's Store</h5>
                  <form action="" class="form-inline mb-5">
                    <textarea name="" id="" cols="50" rows="2" class="form-control mr-4" placeholder="write a question"></textarea><button class="btn btn-lg btn-primary">Ask</button>
                  </form>
                  <h5 class="mb-5">Lastest Questions</h5>
                  <ol class="list-unstyled last-questions-list">
                    <li><i class="fa fa-comment"></i> <span>Hello david, can i pay with credit card?</span></li>
                    <li><i class="fa fa-comment"></i> <span>can i send it to another address?</span></li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="product-payment-details">
              <p class="last-sold text-muted"><small>145 items sold</small></p>
              <h4 class="product-title mb-2">T-shirt Nickony - XXL Black and White - 100% cotton - Limited Stock</h4>
              <h2 class="product-price display-4">$ 25.00</h2>
              <h2 class="product-isbn display-4">$ 25.00</h2>
              <p class="text-success"><i class="fa fa-credit-card"></i> 12x or  5x $ 5.00</p>
              <p class="mb-0"><i class="fa fa-truck"></i> Delivery in all territory</p>
              <div class="text-muted mb-2"><small>know more about delivery time and shipping forms</small></div>
              <form class="add-to-cart-form">
                <div class="form-group">
                  <label for="quant">Quantity</label>
                  <input type="number" name="quantity" min="1" length="2..10" id="quant" class="form-control mb-5 input-lg required" placeholder="Choose the quantity">
                  <span class="quantity-invalid-message"></span>
                 </div>
                 <button class="btn btn-submit btn-primary btn-lg btn-block btn-add-to-cart">Add to Cart</button>
              </form>
            </div>
          </div>
        </div>
      </div>
`
    return {
        initialize: function (panel, data) {
            var elem = App.htmlToDOMElement(detailsTemplate)
            elem.querySelector(".img-thumb").setAttribute("src", `/image?imgId=${data.photo.id}&size=100`)
            elem.querySelector(".product-price").innerText = "$ " + data.originalPrice
            elem.querySelector(".product-isbn").innerText = data.isbn
            elem.querySelector(".product-title").innerText = data.title
            elem.querySelector(".product-gallery-featured > img").setAttribute("src", `/image?imgId=${data.photo.id}&size=240`)
            elem.querySelector(".btn-add-to-cart").addEventListener("click", function (e) {
                console.log("Adding to cart")
            })
            panel.innerHTML = App.domEmelentToHTML(elem)
            var validator = new App.Validator()
            validator.initialize(panel.querySelector("form.add-to-cart-form"))
        }
    }
})