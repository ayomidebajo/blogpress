import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";
import { Link } from "react-router-dom";
import Logo from "../../../logo.svg";

const SignedInLinks = props => {
  return (
    <ul className="signin--container">
      <Link to="/" className="brand-logo">
        <img src={Logo} alt="logo" />
      </Link>
      <li>
        <NavLink className="signin--links" to="/tech">
          TECH
        </NavLink>
      </li>
      <li>
        <NavLink className="signin--links" to="/health">
          HEALTH
        </NavLink>
      </li>
      <li>
        <NavLink className="signin--links" to="/fashion">
          FASHION
        </NavLink>
      </li>
      <li>
        <NavLink className="signin--links" to="/world">
          WORLD
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="black-text" onClick={props.signOut}>
          Log out
        </NavLink>
      </li>

      <li>{props.displayName}</li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
