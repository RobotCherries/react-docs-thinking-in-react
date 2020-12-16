import React, { Component } from "react";
import { IProduct } from "../data/interfaces";

interface AppProps {
  category: string;
}
interface AppState {}

export class ProductCategoryRow extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td colspan="2">
          <b>{this.props.category}</b>
        </td>
      </tr>
    );
  }
}
