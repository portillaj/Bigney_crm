import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import './Signin.css';

import SigninField from './SigninField';
import Register from '../Register/Register';

const FIELDS = [
    { label: "Email", name: "email"},
    { label: "Password", name: "password"}
];

class Signin extends Component {
    renderFields() {
        return _.map(FIELDS, ({ label, name }) => {
            return <Field
                    key={name}
                    component={SigninField} 
                    type="text"
                    label={label}
                    name={name} 
                />
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return(
            <div className="signin-form">
                <h2 className="text-center signin-header">Welcome To the Law Hub</h2>
                <div className="form-container">
                    <form 
                        className="form-group"
                        onSubmit={handleSubmit(values => console.log(values))}>
                        {this.renderFields()}
                        <button type="submit" className="signin-btn">Sign in</button>
                    </form>
                    <p className="text-center text-light">Don't have an account?
                        <span className="register-here">
                            <Link to="/register">Register Here</Link>
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'signin',
})(Signin);