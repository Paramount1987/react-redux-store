import React, { Component } from "react";
import {FormattedMessage} from 'react-intl';
import SearchBar from "../search/Search";
import List from "../items/List";

import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">
                <FormattedMessage id="app.title" />
            </h1>
            <SearchBar />
          </div>
        </div>

        <div className="container">
            <List />
          </div>
      </div>
    );
  }
}
