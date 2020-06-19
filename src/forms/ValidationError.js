import React from "react";

export class ValidationError extends React.Component {
    render() {
        if (this.props.errors) {
            return this.props.errors.map(error => (
            <h6 className="text-danger" key={error}>{error}</h6>
            ))
        }
        return null;
    }
}