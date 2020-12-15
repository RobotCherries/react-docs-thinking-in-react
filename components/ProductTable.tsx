import React, { Component } from "react";
import { IProduct } from "../data/interfaces";

interface AppProps {
  products: IProduct[];
}
interface AppState {}

export class ProductTable extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
    const products: IProduct[] = this.props.products;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {this.props.products.map((product: IProduct) => (
              <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
