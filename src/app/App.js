import React, { Component } from "react";
// dependecies
import { BrowserRouter as Router } from "react-router-dom";
// layout
import Layout from "../layout/Layout";

class App extends Component {
  render() {
    return (
      <Router>
        <Layout />
      </Router>
    );
  }
}

export default App;
