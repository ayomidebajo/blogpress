import React from "react";
import SignedInLinks from "../links/SignedInLinks";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

//Navigation bar
const Navbar = (props) => {
  // console.log(auth);
  const { auth, profile } = props;

  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <Redirect to="/signin" />
  );
  return <nav className="nav-wrapper">{links}</nav>;
};

const mapStateToProps = (state) => {
  console.log(state);

  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
