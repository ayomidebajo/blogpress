import React, { Component } from "react";
import { connect } from "react-redux";
import Logo from "../../../logo.svg";
import { signIn } from "../../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import Landing from "../../pages/Landing";
import { EDITOR_JS_TOOLS } from "../../../constants/ConstantsEditor";
import Footer from "../../layouts/footer/Footer";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: null,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);

    this.setState({
      ...this.state,
      error: this.props.authError,
    });
    setTimeout(() => {
      this.setState({
        ...this.state,
        error: null,
      });
    }, 5000);
  };

  // componentDidMount() {

  // }

  render() {
    const { authError, auth } = this.props;
    // if (this.props.authError) {
    //   this.props.authError = null;
    // }
    console.log(this.state.error, "eroor", this.props.authError);
    if (auth.uid) return <Redirect to="/" />;
    return (
      <>
        <div className="login--container">
          {/* there should be an if statement for the routing of the logo (blogpress) */}
          <aside className="left__side--bar">
            <header className="signin--header">
              <Link to="/" className="logo">
                <img src={Logo} alt="logo" />
              </Link>
              <p className="member">
                Not a member yet?
                <Link to="/signup" className="join">
                  Join
                </Link>
              </p>
            </header>
            <div className="form__container">
              <form onSubmit={this.handleSubmit} className="form--content">
                <h3 className="form-title">Log in</h3>
                <div>
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
                <button className="btn--black">Log in</button>
              </form>
              {/*to check for login failed */}
              <div className="input-field">
                <div className="red-text center">
                  {this.state.error ? <p>{this.state.error}</p> : null}
                </div>
              </div>
            </div>
          </aside>
          <Landing />
        </div>
        {/* <Footer /> */}
      </>
    );
  }
}

//parsing object into store
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
