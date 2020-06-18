import React from "react";
import { PaginationButtons } from "./PaginationButtons";

export class PaginationControls extends React.Component {
  constructor(props) {
    super(props);
    this.pageSizes = this.props.sizes || [5, 10, 100];
    this.sortKeys = this.props.keys || ["Name", "Price"];
  }

  handlePageSizeChange = (event) => {
    this.props.setPageSize(event.target.value);
  };

  handleSortPropertyChange = (event) => {
    this.props.setSortProperty(event.target.value);
  };

  render() {
    return (
      <div className="m-2">
        <div className="text-center m-1">
          <PaginationButtons
            currentPage={this.props.currentPage}
            pageCount={this.props.pageCount}
            navigation={this.props.navigateToPage}
          />
        </div>
        <div className="form-inline justify-content-center">
          <select
            className="form-control"
            onChange={this.handlePageSizeChange}
            value={this.props.sortKey || this.sortKeys[0]}
          >
            {this.pageSizes.map((s) => (
              <option value={s} key={s}>
                {s} per page
              </option>
            ))}
          </select>
          <select
            className="form-control"
            onChange={this.handleSortPropertyChange}
            value={this.props.sortKey || this.sortKeys[0]}
          >
            {this.sortKeys.map((k) => (
              <option value={k.toLowerCase()} key={k}>
                Sort By {k}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
