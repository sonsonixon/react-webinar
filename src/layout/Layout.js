import React, { Component } from "react";
// dependencies
import { Layout as AntLayout } from "antd";
import { withRouter } from "react-router-dom";
// components
import Footer from "./FooterComponent";
import Sidebar from "./SidebarComponent";
import Navbar from "./NavbarComponent";
import Content from "./ContentComponent";
// styles
import "./styles/Layout.css";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    const { location } = this.props;

    const innerLayout = {
      marginLeft: collapsed ? 80 : 200,
      transition: collapsed ? "all 0.2s" : "all 0.3s",
    };

    return (
      <AntLayout style={{ minHeight: "100vh" }}>
        <Sidebar
          collapsed={collapsed}
          onCollapse={this.onCollapse}
          openKey={location.pathname}
        />
        <AntLayout className="site-layout" style={innerLayout}>
          <Navbar />
          <Content />
          <Footer />
        </AntLayout>
      </AntLayout>
    );
  }
}

export default withRouter(Layout);
