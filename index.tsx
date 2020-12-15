import React, { Component } from "react";
import { render } from "react-dom";
import { FilterableProductTable } from "./components";
import { PRODUCTS } from "./data";
import { IProduct } from "./data/interfaces";
import "./style.css";

interface AppProps {
  products: IProduct[];
}
interface AppState {}

export default class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FilterableProductTable products={this.props.products} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
