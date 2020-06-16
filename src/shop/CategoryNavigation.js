import React from "react";
import { Link } from "react-router-dom";

export class CategoryNavigation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link className="btn btn-sencondary btn-block" to={this.props.baseUrl}>
          All
        </Link>
        {this.props.categories &&
          this.props.categories.map((category) => (
            <Link
              className="btn btn-secondary btn-block"
              key={category}
              to={`${this.props.baseUrl}/${category.toLowerCase()}`}
            >
              {category}
            </Link>
          ))}
      </React.Fragment>
    );
  }
}
