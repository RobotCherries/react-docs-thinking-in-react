import React, { Component } from "react";
import { render } from "react-dom";
import { FilterableProductTable } from "./components";
import "./style.css";
import PRODUCTS from "./data/products.json";

interface AppProps {}
interface AppState {}

export default class App extends Component<AppProps, AppState> {
  products = PRODUCTS;

  render() {
    console.log(this.products);
    return (
      <div>
        // <FilterableProductTable products={this.products} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
