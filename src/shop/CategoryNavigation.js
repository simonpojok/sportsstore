import React from "react";
// import { Link } from "react-router-dom";
import { ToggleLink } from "../ToggleLink";

export class CategoryNavigation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ToggleLink to={this.props.baseUrl} exact={true}>
          All
        </ToggleLink>
        {this.props.categories &&
          this.props.categories.map((category) => (
            <ToggleLink
              key={category}
              to={`${this.props.baseUrl}/${category.toLowerCase()}`}
            >
              {category}
            </ToggleLink>
          ))}
      </React.Fragment>
    );
  }
}
