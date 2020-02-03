import React from "react";

//The Footer
function Footer() {
  return (
    <footer>
      <div className="footer--container">
        <div className="container">
          <h5>Footer content</h5>
          <p>I will add content very soon</p>
          <div className="links--container">
            <h6 className="white-text">Links</h6>
            <ul>
              <li>
                <a className="about" href="#!">
                  About us
                </a>
              </li>
              <li>
                <a className="faq" href="#!">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="container">
            © 2014 Copyright Bajo Ayomide
            <a className="social--links" href="#!">
              More Links to come!
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
