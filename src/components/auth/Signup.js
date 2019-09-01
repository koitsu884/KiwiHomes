import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import { connect } from "react-redux";
import { signUp } from "../../actions/userActions";

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            confirm: "",
            last_name: "",
            first_name: "",
            phone: "",
            // street: "",
            // city: "",
            // suburb: "",
            // zip: "",
            errors: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    validateFields = () => {
        /* validations */
        // let isValid = true;
        let errors = {};

        if (!this.state.email) {
            errors.email = "Email is required";
        }

        if (!this.state.last_name) {
            errors.last_name = "Last name is required";
        }

        if (!this.state.first_name) {
            errors.first_name = "First name is required";
        }

        if (!this.state.phone) {
            errors.phone = "Phone number is required";
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
                email: this.state.email,
                password: this.state.password,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                phone: this.state.phone,
                user_type: 'Customer'
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
                    <label>First name *</label>
                    <TextFieldGroup
                        placeholder="First Name"
                        name="first_name"
                        type="tel"
                        value={this.state.first_name}
                        onChange={this.onChange}
                        error={this.state.errors.first_name}
                    />
                    <label>Last name *</label>
                    <TextFieldGroup
                        placeholder="Last Name"
                        name="last_name"
                        type="tel"
                        value={this.state.last_name}
                        onChange={this.onChange}
                        error={this.state.errors.last_name}
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
                    <button className="btn" type="submit" > Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, { signUp })(Signup);