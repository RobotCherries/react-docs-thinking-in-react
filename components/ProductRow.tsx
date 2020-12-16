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
    const isOutOfStock = !this.props.product.stocked;

    return (
      <tr>
        <td>
          <span className={isOutOfStock && "danger"}>
            {this.props.product.name}
          </span>
        </td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}
