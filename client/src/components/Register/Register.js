import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { RingLoader } from 'react-spinners';
import classes from './Register.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import * as actions from '../../actions/';
import RegisterField from './RegisterField';

import validateEmail from '../../utils/emailValidation';

const FIELDS = [
  {
    label: 'Username',
    name: 'username',
    type: 'text',
    placeholder: 'portillaj',
    noValueError: 'You must provide a username'
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'jportilla@gmail.com',
    noValueError: 'You must provide a email'
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: '********',
    noValueError: 'You must provide a password'
  },
  {
    label: 'Confirm Password',
    name: 'password2',
    type: 'password',
    placeholder: '********',
    noValueError: 'You must provide a matching password'
  }
];

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.handleRegisterForm = this.handleRegisterForm.bind(this);
  }

  handleRegisterForm({ email, username, password }) {
    console.log('email: ', email);
  }

  renderFields() {
    return FIELDS.map(({ label, name, type, placeholder }) => {
      return (
        <Field
          key={name}
          type={type}
          placeholder={placeholder}
          component={RegisterField}
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <form className={classes.signupContainer} onSubmit={this.handleRegisterForm}>
        <div className={`${classes['container__child']} ${classes['signup__thumbnail']}`}>
          <div className={classes['thumbnail__logo']}>
            <h1 className={classes['logo__text']}>The Law Hub</h1>
          </div>
          <div className={`${classes['thumbnail__content']} ${Bootstrap['text-center']}`}>
            <h1 className={classes['heading--primary']}>Welcome to the Hub.</h1>
            <h2 className={classes['heading--secondary']}>Where Law is made easier</h2>
          </div>
          <div className={classes['thumbnail__links']} />
          <div className={classes['signup__overlay']} />
        </div>
        <div className={`${classes['container__child']} ${classes['signup__form']}`}>
          {this.renderFields()}
          <div className={Bootstrap['m-t-lg']}>
            <ul className={classes['list-inline']}>
              <li>
                <input
                  className={`${Bootstrap.btn} ${classes['btn--form']}`}
                  type="submit"
                  value="Register"
                />
              </li>
              <li className={classes['already-member']}>
                <a className={classes['signup__link']} href="#">
                  I am already a member
                </a>
              </li>
            </ul>
          </div>
        </div>
      </form>
    );
  }
}

Register = reduxForm({
  form: 'register'
})(Register);

export default (Register = connect(null, actions)(withRouter(Register)));
