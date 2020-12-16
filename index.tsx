import React, { Component } from "react";
import { render } from "react-dom";
import { FilterableProductTable } from "./components";
import { PRODUCTS } from "./data";
import { IProduct } from "./data/interfaces";
import "./style.css";

interface AppProps {}
interface AppState {}

export default class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  products: IProduct[] = PRODUCTS;

  render() {
    return (
      <div>
        <FilterableProductTable products={this.products} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
