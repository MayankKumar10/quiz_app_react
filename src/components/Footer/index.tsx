import React from "react";

export function Footer(): JSX.Element {
  return (
    <div>
      <footer className="col-12">
        <div className="grid-col-4 col-12">
          <div className="footer-container">
            <div className="section-one">
              <span>
                <img src="" alt="" />
                <h5>Always here to help you</h5>
              </span>

              <div className="intro-and-links">
                <h5>All Rights are reserved</h5>
                <h5>Made with ❤️ by Mayank Kumar</h5>
              </div>
            </div>
          </div>

          <div className="section-three">
            <h5>Account</h5>
            <h6>
              <a href="">My Account</a>
            </h6>
            <h6>
              <a href="">Privacy Policy</a>
            </h6>
          </div>

          <div className="section-four">
            <h5>ABOUT</h5>
            <h6>
              <a href="">Contact Us</a>
            </h6>
            <h6>
              <a href="">About Us</a>
            </h6>
          </div>

          <div className="section-six">
            <p className="footer-address">
              Address: Dwarka, New Delhi
            </p>
            <p className="footer-address">
              <span>Call US:</span>
              1800 000 0000
            </p>
            <p className="footer-address">
              <span>Email</span>
              <a href="mailto: mayankkumark28@gmail.com">
                Click This
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
