import React, { Component } from "react";
// import Navbar from "./components/layouts/navbar/Navbar";
//  import './App.css'
// import Footer from "./components/layouts/footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Fashion from "./components/pages/sitepages/Fashion";
import Health from "./components/pages/sitepages/Health";
import Tech from "./components/pages/sitepages/Tech";
import World from "./components/pages/sitepages/World";
import CreatePost from "./components/posts/CreatePost";
import Home from "./components/layouts/Home";
// import PostDetails from "../src/components/posts/PostDetails";
import SignIn from "./components/auth/login/SignIn";
import SignUp from "./components/auth/signup/SignUp";
// import Landing from "./components/pages/Landing";

import "./styles/layout.scss";
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Navbar /> */}
        <Switch>
          {/* <Route exact path="/" component={Landing} /> */}
          <Route path="/home" component={Home} />
          {/* <Route path="/post/:id" component={PostDetails} />*/}
          <Route path="/create" component={CreatePost} />
          <Route path="/health" component={Health} />
          <Route path="/tech" component={Tech} />
          <Route path="/world" component={World} />
          <Route path="/fashion" component={Fashion} />

          <Route exact path="/" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    );
  }
}

export default App;
