import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import Proptypes from 'prop-types';
import './Signin.css';
import * as actions from '../../actions';

import SigninField from './SigninField';
import validateEmail from '../../utils/emailValidation';

const FIELDS = [
	{ label: "Email", name: "email", type: "email", noValueError: 'You must provide a email' }, 
	{ label: "Password", name: "password", noValueError: 'You must provide a password' }
];

class Signin extends Component {
	handleFormSubmit({ email, password }) {
			this.props.signinUser({ email, password },() => {
				this.props.history.push('/dashboard');
		});
	};

	renderFields() {
		return FIELDS.map(({ label, name, type='text' }) => {
			return <Field
				key={name}
				component={SigninField}
				type={type}
				label={label}
				name={name}/>
	});
}

render() {
	const { handleSubmit } = this.props;

	return (
		<div className="signin-form">
			<h2 className="text-center signin-header">Welcome To the Law Hub</h2>
			<div className="form-container">
					<form
						className="form-group"
						onSubmit={ handleSubmit(this.handleFormSubmit.bind(this))}>
						{ this.renderFields() }
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

function validate(values) {
	const errors = {};

	errors.email = validateEmail(values.email);
	
	FIELDS.forEach(({ name, noValueError }) => {
		if(!values[name]) {
			errors[name] = noValueError;
		}
	});

	return errors;
}

function mapStateToProps(state) {
	return { errorMessage: state.auth.error };
}

Signin = reduxForm({
	validate,
	form: 'signin' 
})(Signin);
export default Signin = connect(mapStateToProps, actions)(withRouter(Signin));