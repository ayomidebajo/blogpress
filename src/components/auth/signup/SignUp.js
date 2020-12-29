import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../../store/actions/authActions";
import Landing from "../../pages/Landing";
import { Link } from "react-router-dom";
import Logo from "../../../logo.svg";
import Footer from "../../layouts/footer/Footer";

class SignUp extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/home" />;
    return (
      <>
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
                <h3 className="form-title">Sign up</h3>
                <div className="name">
                  <label htmlFor="name">Your first name</label>
                  <input type="text" id="name" onChange={this.handleChange} />
                </div>
                <div className="name">
                  <label htmlFor="name">Your last name</label>
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
                <div className="input-field">
                  <button className="btn--black">Sign up</button>
                  {authError ? <p>{authError}</p> : null}
                </div>
              </form>
              {/*to check for login failed */}
            </div>
          </aside>
          <Landing />
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
