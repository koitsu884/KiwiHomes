import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import {connect} from "react-redux";
import {signUp} from "../../actions/userActions";

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
            confirm: "",
            lastName: "",
            firstName: "",
            phone: "",
            email: "",
            // street: "",
            // city: "",
            // suburb: "",
            // zip: "",
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

        if (!this.state.userName) {
            errors.userName = "Name is required";
        }

        if (!this.state.lastName) {
            errors.lastName = "Last name is required";
        }

        if (!this.state.firstName) {
            errors.firstName = "First name is required";
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
                username: this.state.userName,
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                phone: this.state.phone,
                userType: 'Customer'
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
                    <label>User Name *</label>
                    <TextFieldGroup
                        placeholder="Name"
                        name="userName"
                        type="text"
                        value={this.state.userName}
                        onChange={this.onChange}
                        error={this.state.errors.userName}
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
                    <label>First name *</label>
                    <TextFieldGroup
                        placeholder="First Name"
                        name="firstName"
                        type="tel"
                        value={this.state.firstName}
                        onChange={this.onChange}
                        error={this.state.errors.firstName}
                    />
                    <label>Lastirst name *</label>
                    <TextFieldGroup
                        placeholder="Last Name"
                        name="lastName"
                        type="tel"
                        value={this.state.lastName}
                        onChange={this.onChange}
                        error={this.state.errors.lastName}
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
                    <button className="btn" type="submit" > Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {signUp})(Signup);