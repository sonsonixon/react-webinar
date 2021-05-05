import React, { Component } from "react";
// dependencies
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
// pages
import Dashboard from "../pages/dashboard/Dashboard";
import UsersList from "../pages/users/List";
import UsersAdd from "../pages/users/Add";
import UsersEdit from "../pages/users/Edit";
import PageNotFound from "../pages/404/PageNotFound";

const { Content } = Layout;

class ContentComponent extends Component {
  render() {
    return (
      <Content style={{ padding: "15px 15px", paddingBottom: "0px" }}>
        <div
          className="site-layout-background"
          style={{ padding: "10px", paddingBottom: "0px", minHeight: "76vh" }}
        >
          <Switch>
            <Route exact path="/" children={<Dashboard />} />
            <Route exact path="/users/list">
              <UsersList />
            </Route>
            <Route exact path="/users/add" children={<UsersAdd />} />
            <Route exact path="/users/edit/:id" children={<UsersEdit />} />
            <Route path="*" children={<PageNotFound />} />
          </Switch>
        </div>
      </Content>
    );
  }
}

export default ContentComponent;
