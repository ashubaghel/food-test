import React from "react";
import Navbar from "../CommonComponents/Navbar";
import Footer from "../CommonComponents/Footer";
import Cart from "../CommonComponents/Cart";
import ProductList from "../CommonComponents/ProductList";
import Checkout from "../CommonComponents/Checkout";

function About() {
  return (
    <>
      <div class="wrapper dashboard Grofoo-home">
        <Navbar />
        <div id="main" class="main search_result">
          <div
            class="inner-page-hero bg-image"
            style={{
              backgroundImage: `url(assets/images/about_us_bg.png)`,
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          >
            <div class="container">
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 aboutus_desc">
                  <div class="text-center white-txt">
                    <h6>
                      <a href="#">About US</a>
                    </h6>
                    <p class="info_sub_text">Grocery to eatery </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="result-show m-0">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-3">
                  <p>
                    <span class="">
                      <strong>Home / About Us</strong>
                    </span>
                  </p>
                </div>
                <div class="col-sm-9 text-right">
                  <a
                    class="btn btn-action btn-gplus wow fadeInDown nomargin"
                    data-wow-delay="0.3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInDown",
                    }}
                  >
                    <span>
                      <i class="ion-ios-box"></i>
                    </span>
                    <span href="#">Contact Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="buyer" class="fa-point-work how-it-works bg-aboutus">
            <div class="container">
              <div class="row text-center">
                <div class="col-sm-8 col-sm-offset-2">
                  <div class="points-intro text-center">
                    <h1 class="wow fadeInDown">
                      <img
                        class="title_img"
                        src="assets/images/ic_title_aboutus.png"
                      />
                    </h1>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-8  how-it-works-steps white-txt col-md-offset-2">
                  <div class="about_us">
                    <div class="about_details">
                      <p>
                        Save more with indexfing! We give you the lowest prices
                        on all your grocery and food needs.
                      </p>
                      <p>
                        indexfing is a low-price online supermarket that gets
                        grocery and food products across categories like
                        grocery, fruits & vegetables, beauty & wellness,
                        household care, baby care, pet care and meats & seafood
                        delivered to your doorstep.
                      </p>
                      <ul class="list">
                        <li>
                          Choose from over 2,000 grocery and food at lower
                          prices than supermarkets every day.
                        </li>
                        <li>Unlimited choice of Indian grocery and food. </li>
                        <li>
                          Pickup at your convenience Delivery at your door
                          steps.
                        </li>
                        <li>
                          Enjoy Indian grocery and food ever before with
                          indexfing.{" "}
                        </li>
                      </ul>
                      <span class="big_text">
                        Happy Shopping with indexfing!
                      </span>

                      <p>Why should I use indexfing.com?</p>
                      <p>
                        Indexfing will let you concentrate on your new business
                        models, products, stores, and customers as it frees up
                        your time from worrying about technology, with our
                        cutting-edge technology protection on your stores by
                        24/7 and 365 days.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="col-xs-12 col-sm-12 col-md-3 how-it-works-steps white-txt col1">
                    <div class="how-it-works-wrap">
                      <div class="step step-1">
                        <div class="icon" data-step="1">
                          <img src="assets/images/ic_user.png" />
                        </div>
                        <h3>100+</h3>
                        <p class="sub_text">
                          People have joined the indexfing team
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-3 how-it-works-steps white-txt col2">
                    <div class="step step-2">
                      <div class="icon" data-step="2">
                        <img src="assets/images/ic_growth.png" />
                      </div>
                      <h3>4x</h3>
                      <p class="sub_text">
                        Rate of growth in our monthly user base
                      </p>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-3 how-it-works-steps white-txt col3 arrow">
                    <div class="step step-3">
                      <div class="icon" data-step="3">
                        <img src="assets/images/ic_city.png" />
                      </div>
                      <h3>10 days</h3>
                      <p class="sub_text">
                        Time taken to launch in 18 cities across India
                      </p>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-3 how-it-works-steps white-txt col3 arrow">
                    <div class="step step-2">
                      <div class="icon" data-step="4">
                        <img src="assets/images/userjoin.png" />
                      </div>
                      <h3>10 K+</h3>
                      <p class="sub_text">
                        Rate of indexfing users register monthly base
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
      <Cart />
      <ProductList />
      <Checkout></Checkout>
    </>
  );
}

export default About;
