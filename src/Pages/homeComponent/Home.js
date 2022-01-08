import React from "react";
import Navbar from "../CommonComponents/Navbar";
import Footer from "../CommonComponents/Footer";
import Slider from "./Slider";
import Categories from "./Categories";
import Glocery from "./Glocery";
import Foods from "./Foods";
import Cart from "../CommonComponents/Cart";
import ProductList from "../CommonComponents/ProductList";
import Checkout from "../CommonComponents/Checkout";

function Home() {
  return (
    <>
      <div className="wrapper Grofoo-home">
        <Navbar />
        <div id="main" className="main">
          <Slider />

          <div id="product categories" className="categories">
            <div className="container">
              <div className="row">
                <div className="home-header-text">
                  <h1 className="wow fadeInDown">Categories</h1>
                </div>

                <Categories />

                <div className="home-header-text">
                  <h1 className="wow fadeInDown title-top-space">
                    Trending Grocery
                  </h1>
                </div>
                <Glocery />
                <div className="home-header-text">
                  <h1 className="wow fadeInDown title-top-space">
                    Trending Foods
                  </h1>
                </div>

                <Foods />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>

      <Cart />
      <ProductList />
      <Checkout></Checkout>
    </>
  );
}

export default Home;
