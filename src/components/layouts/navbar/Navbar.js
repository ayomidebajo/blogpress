import React from 'react'
import SignedInLinks from '../links/SignedInLinks';
import SignedOutLinks from '../links/SignedOutLinks';
// import "materialize-css/dist/css/materialize.min.css";

//Navigation bar
function Navbar() {
    return (
        <nav className="nav-wrapper white darken-1">
            
           <div className="container">
                <SignedOutLinks />
                <SignedInLinks />
           </div>
       </nav>
      
    );
};

export default Navbar
