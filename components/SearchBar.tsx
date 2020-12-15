import React, { Component } from "react";

interface AppProps {}

export class SearchBar extends Component<AppProps, null> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="search" />

        <br />

        <label>
          <input type="checkbox" name="inStockOnly" value="true" />
          Only show products that are in stock.
        </label>
      </div>
    );
  }
}
