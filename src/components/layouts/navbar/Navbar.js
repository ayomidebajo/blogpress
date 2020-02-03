import React from "react";
import SignedInLinks from "../links/SignedInLinks";
import { connect } from "react-redux";

//Navigation bar
const Navbar = () => {
  // console.log(auth);

  return (
    <nav className="nav-wrapper">
      <SignedInLinks />
    </nav>
  );
};

const mapStateToProps = state => {
  console.log(state);

  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
