import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../logo.svg";

function Health() {
  return (
    <div>
      <Link to="/" className="brand-logo">
        <img src={Logo} alt="logo" />
      </Link>
      <p>hello from health</p>
    </div>
  );
}

export default Health;
