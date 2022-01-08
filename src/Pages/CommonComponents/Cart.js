import React from "react";

function Cart() {
  return (
    <>
      <div
        class="modal right fade grofoo-Sidebar"
        id="myModal2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel2"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 class="modal-title" id="myModalLabel2">
                My Cart <span>(3 item)</span>
              </h4>
            </div>

            <div class="modal-body cart-list">
              <div class="cart-box">
                <div class="cart-sub-box">
                  <div class="">
                    <span class="cart-title-left">Sub total</span>
                    <span class="cart-title-right">$1222.00</span>
                    <div class="clear"></div>
                  </div>
                  <div class="">
                    <span class="cart-title-left">Delivery Charges</span>
                    <span class="cart-title-right">
                      <span class="clr_green">Free</span>
                    </span>
                    <div class="clear"></div>
                  </div>
                </div>
                <div class="cart-total">
                  <div class="cart-row">
                    <span class="cart-title-left">Your total saving</span>
                    <span class="cart-title-right">
                      <span class="text--total">$333.33(10%)</span>
                    </span>
                    <div class="clear"></div>
                  </div>
                </div>
                <div class="cart-list-scroll">
                  <div class="cart-list-box">
                    <img class="cart-img" src="assets/images/pro_68615.jpg" />
                    <div class="cart-details">
                      <h1 class="product-name">
                        {" "}
                        Mother's Choice Sweet Mango Chundoo Pickle (Bottle)
                      </h1>
                      <div class="product-unit">400 g</div>
                      <div class="product-items">
                        <div class="add-to-cart-btns">
                          <button>
                            <i class="ion-minus"></i>
                          </button>
                          <span>1</span>
                          <button>
                            <i class="ion-plus"></i>
                          </button>
                        </div>
                        <span class="new-price">X $89.00</span>
                        <span class="old-price">$98.00</span>
                        <div class="total-price">$178.00</div>
                      </div>
                    </div>
                  </div>

                  <div class="cart-list-box">
                    <img class="cart-img" src="assets/images/pro_68615.jpg" />
                    <div class="cart-details">
                      <h1 class="product-name">
                        {" "}
                        Mother's Choice Sweet Mango Chundoo Pickle (Bottle)
                      </h1>
                      <div class="product-unit">400 g</div>
                      <div class="product-items">
                        <div class="add-to-cart-btns">
                          <button>
                            <i class="ion-minus"></i>
                          </button>
                          <span>1</span>
                          <button>
                            <i class="ion-plus"></i>
                          </button>
                        </div>
                        <span class="new-price">X $89.00</span>
                        <span class="old-price">$98.00</span>
                        <div class="total-price">$178.00</div>
                      </div>
                    </div>
                  </div>

                  <div class="cart-list-box">
                    <img class="cart-img" src="assets/images/pro_68615.jpg" />
                    <div class="cart-details">
                      <h1 class="product-name">
                        {" "}
                        Mother's Choice Sweet Mango Chundoo Pickle (Bottle)
                      </h1>
                      <div class="product-unit">400 g</div>
                      <div class="product-items">
                        <div class="add-to-cart-btns">
                          <button>
                            <i class="ion-minus"></i>
                          </button>
                          <span>1</span>
                          <button>
                            <i class="ion-plus"></i>
                          </button>
                        </div>
                        <span class="new-price">X $89.00</span>
                        <span class="old-price">$98.00</span>
                        <div class="total-price">$178.00</div>
                      </div>
                    </div>
                  </div>

                  <div class="cart-list-box">
                    <img class="cart-img" src="assets/images/pro_68615.jpg" />
                    <div class="cart-details">
                      <h1 class="product-name">
                        {" "}
                        Mother's Choice Sweet Mango Chundoo Pickle (Bottle)
                      </h1>
                      <div class="product-unit">400 g</div>
                      <div class="product-items">
                        <div class="add-to-cart-btns">
                          <button>
                            <i class="ion-minus"></i>
                          </button>
                          <span>1</span>
                          <button>
                            <i class="ion-plus"></i>
                          </button>
                        </div>
                        <span class="new-price">X $89.00</span>
                        <span class="old-price">$98.00</span>
                        <div class="total-price">$178.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="more-shopping"
                data-toggle="modal"
                data-target="#myModal1"
              >
                <div class="shopping-header">
                  Last Minute Buys
                  <i class="ion-chevron-up"></i>
                </div>
              </div>

              <div class="checkout-box">
                <div class="checkout-note">
                  <p>Promo code can be applied on payment page</p>
                </div>
                <button
                  class="checkout-btn"
                  data-toggle="modal"
                  data-target="#myModal3"
                >
                  <span> Proceed to Checkout </span>
                  <span class="c-total-text">
                    $344.55 <i class="ion-ios-arrow-forward"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
