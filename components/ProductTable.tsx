import React, { Component } from "react";
import { IProduct } from "../data/interfaces";

interface AppProps {
  products: IProduct[];
  filterText: string;
  inStockOnly: boolean;
}
interface AppState {}

export class ProductTable extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
    const products: IProduct[] = this.props.products;
    const filterText: string = this.props.filterText;
    const inStockOnly: boolean = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach(product => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          // <ProductCategoryRow
          //   category={product.category}
          //   key={product.category} />
          <tr>
            <td colspan="2">
              <b>{product.category}</b>
            </td>
          </tr>
        );
      }
      rows.push(
        // <ProductRow product={product} key={product.name} />
        <tr>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      );
      lastCategory = product.category;
    });

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}
