import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../logo.svg";

function World() {
  return (
    <div>
      <Link to="/" className="brand-logo">
        <img src={Logo} alt="logo" />
      </Link>
      <p>hello fom world</p>
    </div>
  );
}

export default World;
