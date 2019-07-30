import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import {connect} from "react-redux";
import {signUp} from "../../actions/userActions";

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            phone: "",
            email: "",
            password: "",
            confirm: "",
            street: "",
            city: "",
            suburb: "",
            zip: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    validateFields = () => {
        /* validations */
        // let isValid = true;
        let errors = {};

        if (!this.state.name) {
            errors.name = "Name is required";
        }

        if (!this.state.phone) {
            errors.phone = "Phone number is required";
        }

        if (!this.state.email) {
            errors.email = "Email is required";
        }

        if (!this.state.password) {
            errors.password = "Password is required";
        }

        if (!this.state.confirm) {
            errors.confirm = "Confirm Password is required";
        }

        if (this.state.password != this.state.confirm) {
            errors.confirm = "Password unmatch";
        }
        return errors;
    }

    onSubmit = e => {
        e.preventDefault();
        let errors = this.validateFields();

        if (Object.getOwnPropertyNames(errors).length === 0) {
            const formData = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }

            this.props.signUp(formData);
        }
        else {
            this.setState({ errors: errors })
        }

    }

    render() {
        return (
            <div className="signUp">
                <h1>Sign Up</h1>
                <form className="signUp__form form" onSubmit={this.onSubmit}>
                    <label>Name *</label>
                    <TextFieldGroup
                        placeholder="Name"
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.onChange}
                        error={this.state.errors.name}
                    />
                    <label>Phone number *</label>
                    <TextFieldGroup
                        placeholder="Phone number"
                        name="phone"
                        type="tel"
                        value={this.state.phone}
                        onChange={this.onChange}
                        error={this.state.errors.phone}
                    />
                    <label>E-mail *</label>
                    <TextFieldGroup
                        placeholder="Email Address"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        error={this.state.errors.email}
                    />
                    <label>Password *</label>
                    <TextFieldGroup
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        error={this.state.errors.password}
                    />
                    <label>Confirm Password *</label>
                    <TextFieldGroup
                        placeholder="Confirm Password"
                        name="confirm"
                        type="password"
                        value={this.state.confirm}
                        onChange={this.onChange}
                        error={this.state.errors.confirm}
                    />
                    <label>Street Address</label>
                    <TextFieldGroup
                        placeholder="Street Address"
                        name="street"
                        type="text"
                        value={this.state.street}
                        onChange={this.onChange}
                        error={this.state.errors.street}
                    />
                    <label>City</label>
                    <TextFieldGroup
                        placeholder="City"
                        name="city"
                        type="text"
                        value={this.state.city}
                        onChange={this.onChange}
                        error={this.state.errors.city}
                    />
                    <label>Suburb</label>
                    <TextFieldGroup
                        placeholder="Suburb"
                        name="suburb"
                        type="text"
                        value={this.state.suburb}
                        onChange={this.onChange}
                        error={this.state.errors.suburb}
                    />
                    <label>Zip Code</label>
                    <TextFieldGroup
                        placeholder="Zip Code"
                        name="zip"
                        type="text"
                        value={this.state.zip}
                        onChange={this.onChange}
                        error={this.state.errors.zip}
                    />
                    <button className="btn" type="submit" > Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {signUp})(Signup);