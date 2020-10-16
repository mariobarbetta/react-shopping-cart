import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count} Products</div>
        <div className="filter-sort">
          Order{" "}
          <select value={this.props.sort} onChange={this.props.sortProducts}>
            <option>Latest</option>
            <option value="lowest">Low-High</option>
            <option value="highest">High-Low</option>
          </select>
        </div>
        <div className="filter-category">
          Filter{" "}
          <select
            value={this.props.category}
            onChange={this.props.filterProducts}
          >
            <option value="">All</option>
            <option value="guitar">Guitars</option>
            <option value="amp">Amplifiers</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Filter;
