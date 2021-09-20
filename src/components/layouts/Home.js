import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Dashboard from "../home/Dashboard";

class Home extends Component {
  render() {
    return (
      <div className="db__container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Home;
