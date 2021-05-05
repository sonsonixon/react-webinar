import React, { Component } from "react";
// dependencies
import { Layout } from "antd";

const { Header } = Layout;

class NavbarComponent extends Component {
  render() {
    return (
      <Header
        // theme="dark"
        className="site-layout-background"
      />
    );
  }
}

export default NavbarComponent;
