import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import classes from './Signin.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import * as actions from '../../actions';

import SigninField from './SigninField';
import validateEmail from '../../utils/emailValidation';

const FIELDS = [
	{ label: "Email", name: "email", type: "email", noValueError: 'You must provide a email' }, 
	{ label: "Password", name: "password", type: "password", noValueError: 'You must provide a password' }
];

class Signin extends Component {
	handleFormSubmit({ email, password }) {
			this.props.signinUser({ email, password },() => {
			this.props.history.push('/dashboard');
		});
	};

	renderFields() {
		return FIELDS.map(({ label, name, type }) => {
			return <Field
				key={ name }
				type={ type }
				component={ SigninField }
				label={ label }
				name={ name }/>
	});
}

renderAlert() {
	if(this.props.errorMessage) {
		return(
			<div className={Bootstrap['alert alert-danger']}>
				<strong>Oops!</strong>{ this.props.errorMessage }
				</div>
		);
	}
}

render() {
	const { handleSubmit } = this.props;

	return (
		<div className={classes.signinForm}>
			<h2 className={`${Bootstrap['text-center']} ${classes.signinHeader}`}>Welcome To the Law Hub</h2>
			<div className={classes.formContainer}>
					<form
						className={Bootstrap['form-group']}
						onSubmit={ handleSubmit(this.handleFormSubmit.bind(this))}>
						{ this.renderFields() }
						{ this.renderAlert() }
						<button type="submit" className={classes.signinBtn}>Sign in</button>
					</form>
					<p className={`${Bootstrap['text-center']} ${Bootstrap['text-light']}`}>Don't have an account?
						<span className={classes.registerHere}>
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

Signin = reduxForm({
	validate,
	form: 'signin' 
})(Signin);
export default Signin = connect(null, actions)(withRouter(Signin));