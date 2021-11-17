import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";
import { Link } from "react-router-dom";
import Logo from "../../../logo.svg";

const SignedInLinks = (props) => {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    console.log("clicked");
    setActive(!active);
  };
  return (
    <ul className="nav-signin">
      <Link to="/" className="brand-logo">
        <img src={Logo} alt="logo" />
      </Link>

      <button className="hamburger " onClick={handleActive}>
        {" "}
        <span className="bar"></span>
        <span className="bar "></span>
        <span className="bar "></span>
      </button>
      <ul className={`signin--container ${active ? "active-nav" : null} `}>
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
          <Link to="/signin" className="black-text" onClick={props.signOut}>
            Log out
          </Link>
        </li>

        <li>{props.displayName}</li>
      </ul>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
