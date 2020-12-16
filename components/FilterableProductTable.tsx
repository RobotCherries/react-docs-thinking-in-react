import React, { Component } from "react";
import { SearchBar } from ".";
import { ProductTable } from ".";
import { IProduct } from "../data/interfaces";

interface Product {
  category: string;
  price: string;
  stocked: string;
  name: string;
}
interface AppProps {
  products: IProduct[];
}
interface AppState {
  nameFilter: string;
  inStockOnly: boolean;
}

export class FilterableProductTable extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);

    // State
    this.state = {
      nameFilter: "",
      inStockOnly: false
    };

    // Handles
    this.handleNameFilterChange = this.handleNameFilterChange.bind(this);
    this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
  }

  // Handles
  handleNameFilterChange(nameFilter) {
    this.setState({ nameFilter: nameFilter });
  }

  handleInStockOnlyChange(inStockOnly) {
    this.setState({ inStockOnly: inStockOnly });
  }

  render() {
    return (
      <div>
        <SearchBar
          nameFilter={this.state.nameFilter}
          inStockOnly={this.state.inStockOnly}
          onNameFilterChange={this.handleNameFilterChange}
          onInStockOnlyChange={this.handleInStockOnlyChange}
        />

        <br />

        <ProductTable
          products={this.props.products}
          filterText={this.state.nameFilter}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}
