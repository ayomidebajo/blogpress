import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Fashion from "./components/pages/sitepages/Fashion";
import Health from "./components/pages/sitepages/Health";
import Tech from "./components/pages/sitepages/Tech";
import World from "./components/pages/sitepages/World";
import Home from "./components/layouts/Home";
import Navbar from "./components/layouts/navbar/Navbar";
import PostDetails from "./components/posts/PostDetails";
import PostSummary from "./components/posts/PostSummary";
import Post from "./components/posts/Post";
import SignIn from "./components/auth/login/SignIn";
import SignUp from "./components/auth/signup/SignUp";
import Footer from "./components/layouts/footer/Footer";

import "./styles/layout.scss";
export class App extends Component {
  render() {
    const { auth, profile } = this.props;
    console.log(this.props, "props");
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/tech" component={Tech} />
          <Route path="/post/:id" component={PostSummary} />
          <Route path="/create" component={Post} />
          <Route path="/post" component={Post} />
          <Route path="/health" component={Health} />
          {/* <Route path="/world" component={World} /> */}
          <Route path="/fashion" component={Fashion} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
