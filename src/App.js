import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Fashion from "./components/pages/sitepages/Fashion";
import Health from "./components/pages/sitepages/Health";
import Tech from "./components/pages/sitepages/Tech";
import World from "./components/pages/sitepages/World";
import Home from "./components/layouts/Home";
import PostDetails from "./components/posts/PostDetails";
import PostSummary from "./components/posts/PostSummary";
import Post from "./components/posts/Post";
import SignIn from "./components/auth/login/SignIn";
import SignUp from "./components/auth/signup/SignUp";

import "./styles/layout.scss";
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/post/:id" component={PostDetails} />
          <Route path="/create" component={Post} />
          <Route path="/post" component={Post} />
          <Route path="/health" component={Health} />
          <Route path="/tech" component={Tech} />
          <Route path="/world" component={World} />
          <Route path="/fashion" component={Fashion} />
          <Route exact path="/" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
