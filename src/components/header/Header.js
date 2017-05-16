import React, { Component } from "react";
import SwitchLang from "../../containers/lang/SwitchLang";

class Header extends Component {

  render() {
    return (
        <div>
          <SwitchLang />
        </div>
    );
  }
}

export default Header;
