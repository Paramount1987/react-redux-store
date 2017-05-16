import React, { Component } from "react";
/////////////////////////////////////////////////////////////////////////

import Header from "../../components/header/Header";
import Home from "../home/Home";

import "./app.css";

export default class App extends Component {

  render() {

    return (
        <div>
          <div className="container">
              <Header />
            <div className="appContent">
              <Home />
            </div>
          </div>
        </div>
    );
  }
}
