import React, { Component } from "react";

interface AppProps {
  nameFilter: string;
  inStockOnly: boolean;
  onNameFilterChange: any;
  onInStockOnlyChange: any;
}

export class SearchBar extends Component<AppProps, null> {
  constructor(props) {
    super(props);

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
  }

  handleFilterChange(e) {
    this.props.onNameFilterChange(e.target.value);
    console.log(e.target.value);
  }

  handleInStockOnlyChange(e) {
    this.props.onInStockOnlyChange(e.target.checked);
    console.log(e.target.checked);
  }

  render() {
    const nameFilter = this.props.onNameFilterChange;
    const inStockOnly = this.props.onInStockOnlyChange;

    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.nameFilter}
          onChange={this.handleFilterChange}
        />

        <br />

        <label>
          <input
            type="checkbox"
            name="inStockOnly"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockOnlyChange}
          />
          Only show products that are in stock.
        </label>
      </div>
    );
  }
}
