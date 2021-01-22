import React from "react";

//The Footer
function Footer() {
  return (
    <footer>
      <div className="footer--container">
        <div className="inner-footer">
          <div className="links--container">
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
          <div className="footer-copyright">© 2020 Copyright BLOGPRESS</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
