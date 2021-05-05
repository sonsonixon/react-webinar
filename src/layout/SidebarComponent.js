import React, { Component } from "react";
// dependencies
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
// icons
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserAddOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

class SidebarComponent extends Component {
  render() {
    const { collapsed, onCollapse, openKey } = this.props;

    return (
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        width={200}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div
          className="logo"
          // style={{ position: "fixed", zIndex: 1 }}
        />
        <Menu theme="dark" defaultSelectedKeys={[openKey]} mode="inline">
          <Item key="/" icon={<PieChartOutlined />}>
            <Link to="/">Home</Link>
          </Item>
          <Item key="/about" icon={<DesktopOutlined />}>
            <Link to="/about">About</Link>
          </Item>
          <SubMenu key="/users" icon={<TeamOutlined />} title="User">
            <Item key="/users/add" icon={<UserAddOutlined />}>
              <Link to="/users/add">Add</Link>
            </Item>
            <Item key="/users/list" icon={<UnorderedListOutlined />}>
              <Link to="/users/list">List</Link>
            </Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default SidebarComponent;
