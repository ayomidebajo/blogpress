import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../../store/actions/authActions";
import Landing from "../../pages/Landing";
import { Link } from "react-router-dom";
import Logo from "../../../logo.svg";

class SignUp extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="login--container">
        {/* there should be an if statement for the routing of the logo (blogpress) */}
        <aside className="left__side--bar">
          <header className="signin--header">
            <Link to="!#" className="logo">
              <img src={Logo} alt="logo" />
            </Link>
            <p className="member">
              Already a member?
              <Link to="/" className="login">
                Login
              </Link>
            </p>
          </header>
          <div className="form__container">
            <form onSubmit={this.handleSubmit} className="form--content">
              <h3 className="form-title">Log in</h3>
              <div className="name">
                <label htmlFor="name">Your full name</label>
                <input type="text" id="name" onChange={this.handleChange} />
              </div>
              <div className="email">
                <label htmlFor="email">Your email</label>
                <input type="email" id="email" onChange={this.handleChange} />
              </div>
              <div className="password-field">
                <label htmlFor="password">Create a secure password</label>
                <input
                  type="password"
                  id="password"
                  onChange={this.handleChange}
                />
              </div>
              <button className="btn btn--black">Log in</button>
            </form>
            {/*to check for login failed */}
            {/* <div className="input-field">
              <button className="btn blue lighten-1 z-depth-0">Login</button>
              <div className="red-text center">
                {authError ? <p>{authError}</p> : null}
              </div>
            </div> */}
          </div>
        </aside>
        <Landing />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
