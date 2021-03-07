import React, { Component } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Dashboard from "../home/Dashboard";

class Home extends Component {
  render() {
    return (
      <div className="db__container">
        <Dashboard />   
      </div>
    );
  }
}

export default Home;
