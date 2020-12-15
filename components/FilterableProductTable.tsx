import React, { Component } from "react";
import { SearchBar } from ".";
import { ProductTable } from ".";

interface AppProps {}
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
      inStockOnly: true
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

        <ProductTable />
      </div>
    );
  }
}
