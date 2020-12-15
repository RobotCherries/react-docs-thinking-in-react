import React, { Component } from "react";
import { render } from "react-dom";
import { FilterableProductTable } from "./components";
import "./style.css";

interface AppProps {}
interface AppState {}

export default class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <h1>Test</h1>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
