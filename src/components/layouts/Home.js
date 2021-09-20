import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Dashboard from "../home/Dashboard";
import Tech from "../pages/sitepages/Tech";
import PostSummary from "../posts/PostSummary";
import Post from "../posts/Post";
import Health from "../pages/sitepages/Health";
import World from "../pages/sitepages/World";
import Fashion from "../pages/sitepages/Fashion";

class Home extends Component {
  render() {
    return (
      <div className="db__container">
        {/* <Router> */}
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
        <Footer />
        {/* </Router> */}
      </div>
    );
  }
}

export default Home;
