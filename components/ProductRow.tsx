import React, { Component } from "react";
import { IProduct } from "../data/interfaces";

interface AppProps {
  product: IProduct;
}
interface AppState {}

export class ProductRow extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}
