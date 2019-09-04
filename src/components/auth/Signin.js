import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions/userActions';
import TextFieldGroup from '../common/TextFieldGroup';

class Signin extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();
        /* validations */
        let isValid = true;
        let errors = {};

        if(!this.state.email){
            errors.email = "Email is required field";
            isValid = false;
        }

        if(!this.state.password){
            errors.password = "Password is required field";
            isValid = false;
        }

        if(isValid)
        {
            this.props.signIn(this.state.email, this.state.password);
        }
        else{
            this.setState({errors: errors})
        }

    }

    render() {
        return (
            <div className="signIn">
                <h1>Sign In</h1>
                <form className="signIn__form form" onSubmit={this.onSubmit}>
                    <TextFieldGroup
                        placeholder="Email Address"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        error={this.state.errors.email}
                    />
                    <TextFieldGroup
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        error={this.state.errors.password}
                    />
                    <button className="btn" type="submit" > Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { signIn })(Signin);