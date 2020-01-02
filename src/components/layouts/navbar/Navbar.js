import React from 'react'
import SignedInLinks from '../links/SignedInLinks';
import SignedOutLinks from '../links/SignedOutLinks';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//Navigation bar
const Navbar = (props) => {
    const { auth, profile } = props;
    // console.log(auth);

    const links = auth.uid ? <SignedInLinks  profile={profile}/> : <SignedOutLinks />;
    
    return (
        <nav className="nav-wrapper white darken-1">
           <div className="container">
           <Link to='/' className="brand-logo black-text">BlogPress</Link>
           { links }
           </div>
       </nav>
      
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }  
}

export default connect(mapStateToProps)(Navbar);
