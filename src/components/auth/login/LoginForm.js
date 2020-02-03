import React from "react";
import { Link } from "react-router-dom";
// import Landing from "../../pages/Landing";
import SignIn from "../login/SignIn";

function LoginForm() {
  return (
    <div className="login--container">
      <div className="login__container">
        {/* there should be an if statement for the routing of the logo (blogpress) */}
        <Link to="!#" className="logo">
          BlogPress
        </Link>
        <p>
          Not a member yet?
          <Link to="/signup" className="join">
            Join
          </Link>
        </p>

        <div className="form__container">
          <form onSubmit={this.handleSubmit} className="form--content">
            <h5 className="grey-text text-darken-3">Log in</h5>
            <div className="email-field">
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="password-field">
              <label htmlFor="password">Your password</label>
              <input
                type="password"
                id="password"
                onChange={this.handleChange}
              />
            </div>
          </form>
        </div>
      </div>
      <SignIn />
    </div>
  );
}

export default LoginForm;
