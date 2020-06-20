import React from "react";
import { ValidationError } from "./ValidationError";
import { GetMessages } from "./ValidationMessages";

export class ValidatedForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validationErrors: {},
    };
    this.formElements = {};
  }

  handleSubmit = () => {
    this.setState(
      (state) => {
        const newState = { ...state, validationErrors: {} };
        Object.values(this.formElements).forEach((elem) => {
          if (!elem.checkValidity()) {
            newState.validationErrors[elem.name] = GetMessages(elem);
          }
        });
        return newState;
      },
      () => {
        if (Object.keys(this.state.validationErrors).length === 0) {
          // there is no errors
          const data = Object.assign(
            ...Object.entries(this.formElements).map((e) => {
              console.log(e[1]);
              return { [e[0]]: e[1].value };
            })
          );
          console.log(data);
          this.props.submitCallback(data);
        }
      }
    );
  };

  registerRef = (element) => {
    console.log(element);
    if (element !== null) {
      this.formElements[element.name] = element;
    }
  };

  renderElement = (modelItem) => {
    const name = modelItem.name || modelItem.label.toLowerCase();
    return (
      <div className="form-group" key={modelItem.label}>
        <label for={name}>{modelItem.label}</label>
        <ValidationError errors={this.state.validationErrors[name]} />
        <input
          className="form-control"
          name={name}
          id={name}
          ref={this.registerRef}
          {...this.props.defaultAttrs}
          {...modelItem.attrs}
        />
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        {this.props.formModel.map((m) => this.renderElement(m))}
        <div className="text-center">
          <button
            className="btn btn-secondary m-1"
            onClick={this.props.cancelCallback}
          >
            {this.props.cancelText || "Cancel"}
          </button>
          <button className="btn btn-primary m-1" onClick={this.handleSubmit}>
            {this.props.submitText || "Submit"}
          </button>
        </div>
      </React.Fragment>
    );
  }
}
