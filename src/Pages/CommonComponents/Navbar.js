import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header page-scroll">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="index.html">
              <img src="assets/images/header_logo.png" className="logo_c" />
            </a>
          </div>
          <div
            className="collapse navbar-collapse navbar-right"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav ">
              <li className="dropdown  notify">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <span className="notify-row">
                    <span className="bell ">
                      <i className="ion-ios-location-outline"></i>Location
                      <i className="ion-chevron-down adown"></i>
                    </span>
                  </span>
                </a>
                <ul className="dropdown-menu extended tasks-bar">
                  <div className="notify-arrow notify-arrow-green"></div>
                  <div className="search-box">
                    <h3 className="header">Where do you want the delivery?</h3>
                    <div className="deliver-section">
                      Deliver in : <span className="clr_green">Gurugram</span>
                    </div>
                    <div className="location-selection">
                      <p>——— Or Select your city ———</p>
                      <h1>Top Searched Cities</h1>
                      <span className="city_tag">New York</span>
                      <span className="city_tag">Brooklyn</span>
                      <span className="city_tag">Chicago</span>
                      <div className="location-search-box">
                        <i className="location-seach-icon ion-ios-search"></i>
                        <input
                          type="text"
                          className="search-input"
                          placeholder="Address, city, zip code or state"
                        />
                        <button className="auto-detect-btn">
                          <i className="ion-android-locate"></i>Detect
                        </button>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="dropdown  notify">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="modal"
                  data-target="#myModal2"
                >
                  <span className="notify-row">
                    <span className="bell ">
                      <i className="ion-ios-cart-outline"></i> My Cart
                      <span className="label label-info badge">3</span>
                    </span>
                  </span>
                </a>
              </li>

              <a className="btn btn-nav-line page-scroll " href="login.html">
                <i className="ion-ios-contact-outline"></i> Sign In
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
