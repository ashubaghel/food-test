import React from "react";

function HomeSlider() {
  return (
    <>
      <div className="hero">
        <div className="container text-center hero-text font-white s_box">
          <div className="row">
            <div className="Home-logo-icon">
              <img src="assets/images/home_icon_logo.png" />
            </div>
            <h5 className="header_white">
              Discover
              <span className="clr_green">food</span> or
              <span className="clr_orange">grocery</span>
              <br />
              near by you
            </h5>
            <div className="banner-form">
              <form className="form-inline">
                <div className="form-group">
                  <div className="home-bg-icon"></div>
                  <i className="ion-ios-search-strong icon-search"></i>
                  <input
                    type="text"
                    className="form-control form-control-lg input_box"
                    id="exampleInputAmount"
                    placeholder="Enter food or grocery"
                  />
                  <div className="can-toggle demo-rebrand-1">
                    <input id="d" type="checkbox" />
                    <label for="d">
                      <div
                        className="can-toggle__switch"
                        data-checked="Grocery"
                        data-unchecked="Food"
                      ></div>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSlider;
