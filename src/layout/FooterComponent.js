import React, { Component } from "react";
import { Layout } from "antd";

const { Footer } = Layout;

class FooterComponent extends Component {
  render() {
    return (
      <Footer style={{ textAlign: "center" }}>React Tutorial @JRU 2021</Footer>
    );
  }
}

export default FooterComponent;
