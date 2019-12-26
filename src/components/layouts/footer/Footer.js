import React from 'react'

//The Footer
function Footer() {
    return (
      <footer className="page-footer blue darken-2">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">I will add content very soon</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">About us</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2014 Copyright Bajo Ayomide
            <a className="grey-text text-lighten-4 right" href="#!">More Links to come!</a>
            </div>
          </div>
        </footer>
            
    )
}

export default Footer
