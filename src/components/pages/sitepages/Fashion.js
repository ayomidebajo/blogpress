import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../logo.svg";

function Fashion() {
  return (
    <div>
      <Link to="/" className="brand-logo">
        <img src={Logo} alt="logo" />
      </Link>
      <p className="para">hello from fashion</p>
    </div>
  );
}

export default Fashion;
