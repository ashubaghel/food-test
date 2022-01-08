import React from "react";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-9 col-xs-12">
              <ul className="footer-link">
                <li>
                  <a href="aboutus.html">About Us</a>
                </li>
                <li>
                  <a href="faq.html">Help Center</a>
                </li>
                <li>
                  <a href="Business_contact_us.html">Contact Us</a>
                </li>
                <li>
                  <a href="policy.html">Privacy Policy</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="Business_Home.html">Retailer login</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 col-md-3 col-xs-12 text-right">
              <ul className="social-link">
                <li>
                  <i className="ion-social-facebook social-icon"></i>
                </li>
                <li>
                  <i className="ion-social-linkedin social-icon"></i>
                </li>
                <li>
                  <i className="ion-social-twitter social-icon"></i>
                </li>
                <li>
                  <i className="ion-social-skype social-icon"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
