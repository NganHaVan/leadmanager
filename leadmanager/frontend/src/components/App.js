import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Dashboard from "./leads/Dashboard";
import Header from "./layout/Header";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Dashboard />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
