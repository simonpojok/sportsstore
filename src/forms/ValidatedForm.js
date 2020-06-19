import React from "react";
import { ValidationError } from "./ValidationError";
import { GetMessages } from "./ValidationMessages"

export class ValidatedForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validationErrors: { }
        };
        this.formElements = { };
    }

    handle
}