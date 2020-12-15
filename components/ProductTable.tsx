import React, { Component } from "react";
import { Product } from "../data/products";

interface AppProps {
  products: Product[];
}
interface AppState {}

export class ProductTable extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
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
            <tr>
              <td>cell</td>
              <td>cell</td>
            </tr>
            <tr>
              <td>cell</td>
              <td>cell</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
