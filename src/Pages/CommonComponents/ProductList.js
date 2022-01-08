import React from "react";

function ProductList() {
  return (
    <>
      <div
        className="modal right fade grofoo-Sidebar"
        id="myModal1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel2"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content product-list-search">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">
                Product List<span></span>
              </h4>
              <input type="Search" className="p-l-search" />
            </div>
            <div className="modal-body cart-list">
              <div className="cart-box">
                <div className="cart-list-scroll">
                  <div className="cart-list-box">
                    <img
                      className="cart-img"
                      src="assets/images/pro_68615.jpg"
                    />
                    <div className="cart-details">
                      <h1 className="product-name">
                        {" "}
                        Mother's Choice Sweet Mango Chundoo Pickle (Bottle)
                      </h1>
                      <div className="product-unit">400 g</div>
                      <div className="product-items">
                        <div className="add-to-cart-btns">
                          <button>
                            <i className="ion-minus"></i>
                          </button>
                          <span>1</span>
                          <button>
                            <i className="ion-plus"></i>
                          </button>
                        </div>
                        <span className="new-price">X $89.00</span>
                        <span className="old-price">$98.00</span>
                        <div className="total-price">$178.00</div>
                      </div>
                    </div>
                  </div>

                  <div className="cart-list-box">
                    <img
                      className="cart-img"
                      src="assets/images/pro_68615.jpg"
                    />
                    <div className="cart-details">
                      <h1 className="product-name">
                        {" "}
                        Mother's Choice Sweet Mango Chundoo Pickle (Bottle)
                      </h1>
                      <div className="product-unit">400 g</div>
                      <div className="product-items">
                        <div className="add-to-cart-btns">
                          <button>
                            <i className="ion-minus"></i>
                          </button>
                          <span>1</span>
                          <button>
                            <i className="ion-plus"></i>
                          </button>
                        </div>
                        <span className="new-price">X $89.00</span>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
