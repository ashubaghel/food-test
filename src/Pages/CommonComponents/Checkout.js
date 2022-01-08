import React from "react";

function Checkout() {
  return (
    <>
      <div
        className="modal right fade grofoo-Sidebar"
        id="myModal3"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel3"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="myModalLabel2">
                Addresss
              </h4>
            </div>

            <div className="modal-body cart-list">
              <div className="wizard_checkout">
                <div className="wizard-inner">
                  <div className="connecting-line"></div>
                  <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active">
                      <a
                        href="#step1"
                        data-toggle="tab"
                        aria-controls="step1"
                        role="tab"
                        title="Shipping Method"
                      >
                        <span className="round-tab">1</span>
                        <span className="w-label">Shipping Method</span>
                      </a>
                    </li>

                    <li role="presentation" className="disabled">
                      <a
                        href="#step2"
                        data-toggle="tab"
                        aria-controls="step2"
                        role="tab"
                        title="Review Order"
                      >
                        <span className="round-tab">2</span>
                        <span className="w-label">Review Order</span>
                      </a>
                    </li>
                    <li role="presentation" className="disabled">
                      <a
                        href="#step3"
                        data-toggle="tab"
                        aria-controls="step3"
                        role="tab"
                        title="Payment & Billing"
                      >
                        <span className="round-tab">3</span>
                        <span className="w-label">Payment & Billing</span>
                      </a>
                    </li>

                    <li role="presentation" className="disabled">
                      <a
                        href="#complete"
                        data-toggle="tab"
                        aria-controls="complete"
                        role="tab"
                        title="Complete"
                      >
                        <span className="round-tab">4</span>
                        <span className="w-label">Complete Order</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <form role="form" className="checkout-tab-box">
                  <div className="tab-content">
                    <div className="tab-pane active" role="tabpanel" id="step1">
                      <div className="check-title-box">
                        <div className="check-title">
                          Chose Delivery Address
                        </div>
                        <div className="check-add-btn">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#myModal4"
                          >
                            {" "}
                            Add New <i className="ion-plus"></i>
                          </a>
                        </div>
                      </div>
                      <div className="address-box">
                        <label className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input"
                          />
                          <span className="custom-control-indicator"></span>
                          <span className="custom-control-description">
                            Annie Smith
                          </span>
                        </label>
                        <p className="address">
                          example_mail@mail.com
                          <br />
                          1 Chapel Hill,
                          <br /> Heswall,
                          <br /> BOURNEMOUTH,
                          <br /> BH1 1AA
                        </p>

                        <div className="formee">
                          <select>
                            <option value="1">Select Address</option>
                            <option value="1"> Address 1</option>
                            <option value="1"> Address 2</option>
                          </select>
                        </div>
                      </div>
                      <br />
                      <div className="check-title-box">
                        <div className="check-title">Chose Billing address</div>
                      </div>
                      <div className="address-box">
                        <label className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input"
                          />
                          <span className="custom-control-indicator"></span>
                          <span className="custom-control-description">
                            Annie Smith
                          </span>
                        </label>
                        <p className="address">
                          example_mail@mail.com
                          <br />
                          1 Chapel Hill,
                          <br /> Heswall,
                          <br /> BOURNEMOUTH,
                          <br /> BH1 1AA
                        </p>

                        <div className="formee">
                          <select>
                            <option value="1">Select Address</option>
                            <option value="1"> Address 1</option>
                            <option value="1"> Address 2</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" role="tabpanel" id="step2">
                      <div className="check-title-box">
                        <div className="check-title">
                          Review Order & Notification{" "}
                        </div>
                        <div className="check-add-btn">
                          <label className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                            />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description notify-text">
                              Notification
                            </span>
                          </label>
                        </div>
                      </div>

                      <div className="review-cart-box">
                        <div className="cart_note">
                          <i className="ion-information-circled"></i>Items in
                          your cart have been grouped by store. Please click on
                          checkout to complete transition.
                        </div>

                        <div className="cart-sub-box">
                          <div className="">
                            <span className="cart-title-left">Sub total</span>
                            <span className="cart-title-right">$1222.00</span>
                            <div className="clear"></div>
                          </div>
                          <div className="">
                            <span className="cart-title-left">
                              Delivery Charges
                            </span>
                            <span className="cart-title-right">
                              <span className="clr_green">Free</span>
                            </span>
                            <div className="clear"></div>
                          </div>
                        </div>
                        <div className="cart-total">
                          <div className="cart-row">
                            <span className="cart-title-left">
                              Your total saving
                            </span>
                            <span className="cart-title-right">
                              <span className="text--total">$333.33(10%)</span>
                            </span>
                            <div className="clear"></div>
                          </div>
                        </div>
                        <div className="">
                          <div className="store_details">
                            <i className="ion-ios-home"></i>
                            <span className="store_address">
                              Guru Groceries and Chaat House, 14119 Travilah Rd,
                              MD 20850, Phone No: 13013185600
                              www.ubconnect.com/gurugrocerieschaathouse
                              <span className="hrs">
                                Hours : 8:00 AM to 6:00 PM
                              </span>
                              <div className="">
                                <label className="custom-control custom-radio right-space">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                  />
                                  <span className="custom-control-indicator"></span>
                                  <span className="custom-control-description payment-o-text">
                                    Delivery
                                  </span>
                                </label>

                                <label className="custom-control custom-radio right-space">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                  />
                                  <span className="custom-control-indicator"></span>
                                  <span className="custom-control-description payment-o-text">
                                    Pickup
                                  </span>
                                </label>
                              </div>
                            </span>
                          </div>
                          <div className="cart-list-box">
                            <img
                              className="cart-img"
                              src="assets/images/pro_68615.jpg"
                            />
                            <div className="cart-details">
                              <h1 className="product-name">
                                {" "}
                                Mother's Choice Sweet Mango Chundoo Pickle
                                (Bottle)
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
                                Mother's Choice Sweet Mango Chundoo Pickle
                                (Bottle)
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
                                Mother's Choice Sweet Mango Chundoo Pickle
                                (Bottle)
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
                          <div className="store_details">
                            <i className="ion-ios-home"></i>
                            <span className="store_address">
                              Apani dukan Groceries , 1221 Near bus station, MD
                              12112, Phone No: +91 91919191 www.apnidukan.com
                              <span className="hrs">
                                Hours : 8:00 AM to 6:00 PM
                              </span>
                              <div className="">
                                <label className="custom-control custom-radio right-space">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                  />
                                  <span className="custom-control-indicator"></span>
                                  <span className="custom-control-description payment-o-text">
                                    Delivery
                                  </span>
                                </label>

                                <label className="custom-control custom-radio right-space">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                  />
                                  <span className="custom-control-indicator"></span>
                                  <span className="custom-control-description payment-o-text">
                                    Pickup
                                  </span>
                                </label>
                              </div>
                            </span>
                          </div>
                          <div className="cart-list-box">
                            <img
                              className="cart-img"
                              src="assets/images/pro_68615.jpg"
                            />
                            <div className="cart-details">
                              <h1 className="product-name">
                                {" "}
                                Mother's Choice Sweet Mango Chundoo Pickle
                                (Bottle)
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
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" role="tabpanel" id="step3">
                      <div className="check-title-box">
                        <div className="check-title">Payment Options</div>
                      </div>
                      <div className="payment-options-box">
                        <div className="top-space">
                          <label className="custom-control custom-radio right-space">
                            <input
                              type="radio"
                              className="custom-control-input"
                            />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description payment-o-text">
                              PayPal
                            </span>
                          </label>

                          <label className="custom-control custom-radio right-space">
                            <input
                              type="radio"
                              className="custom-control-input"
                            />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description payment-o-text">
                              WorldPay
                            </span>
                          </label>
                        </div>

                        <div className="formee top-space">
                          <input type="text" placeholder="Name on Card" />
                          <input type="text" placeholder="Card Number" />
                          <input
                            type="text"
                            className="expire-date-input"
                            placeholder="Expire Date (MM/YY)"
                          />
                          <input
                            type="text"
                            className="cvv-input"
                            placeholder="CVV"
                          />
                        </div>
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <span className="custom-control-indicator"></span>
                          <span className="custom-control-description notify-text">
                            Save this as my primary payment method
                          </span>
                        </label>

                        <div className="check-title-box top-space">
                          <div className="check-title">Promotion</div>
                        </div>
                        <div className="formee">
                          <div className="Promotion">
                            <i className="ion-plus"></i>
                            <input type="text" placeholder="Promotion Code" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" role="tabpanel" id="complete">
                      <div className="check-title-box">
                        <div className="check-title">Complete Order</div>
                      </div>
                      <div className="modal-body complete-order">
                        <img src="assets/images/order_completed.png" />
                        <h1>Complete Successfully</h1>
                        <p>
                          Your ordering information will be forwarded to your
                          email{" "}
                        </p>
                        <b>example_mail@mail.com</b>
                        <br />
                        <button className="btn cart-btn">More Shopping</button>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </form>
              </div>

              <div className="checkout-box">
                <div className="checkout-note">
                  <div className="cart-final-total" id="cart-final-total">
                    <div>Cart Subtotal : $5000.00 </div>
                    <div>Shipping : $9,99.00 </div>
                    <div>Promotion discount : $10.00 </div>
                  </div>
                  <p>Promo code can be applied on payment page</p>
                </div>
                <button className="checkout-process-btn">
                  <span className="prev-step-checkout pre-text">
                    {" "}
                    <i className="ion-ios-arrow-left"></i> Previous
                  </span>
                  $3444.33
                  <span className="c-total-text  next-step-checkout">
                    Next <i className="ion-ios-arrow-forward"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default Checkout;