import React, { Component } from "react";
import { SearchBar } from ".";

interface AppProps {}
interface AppState {
  nameFilter: string;
  inStockOnly: boolean;
}

export class FilterableProductTable extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      nameFilter: "",
      inStockOnly: true
    };

    this.handleNameFilterChange = this.handleNameFilterChange.bind(this);
    this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
  }

  handleNameFilterChange(nameFilter) {
    this.setState({ nameFilter: nameFilter });
  }

  handleInStockOnlyChange(inStockOnly) {
    this.setState({ inStockOnly: inStockOnly });
  }

  render() {
    // console.log(this.state);
    const nameFilter = this.state.nameFilter;
    const inStockOnly = this.state.inStockOnly;

    return (
      <div>
        <SearchBar
          nameFilter={nameFilter}
          inStockOnly={inStockOnly}
          onNameFilterChange={this.handleNameFilterChange}
          onInStockOnlyChange={this.handleInStockOnlyChange}
        />
      </div>
    );
  }
}
