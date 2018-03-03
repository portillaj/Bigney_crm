import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import './LoginDetails.scss';

const LoginDetails = (props) => {
  const { handleSubmit, submitForm } = props;
  return (
    <div>
      <h2 className="login-title text-center">Welcome To Bigney Law</h2>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="form-group">
          <label>Enter your username</label>
          <Field
            name="username" 
            className="form-control" 
            component="input" 
            placeholder="Enter username"
            type="username"
          />
        </div>
        <div className="form-group">
          <label>Enter your password</label>
          <Field 
            name="password"
            component="input" 
            className="form-control" 
            placeholder="Password"
            type="password"
          />
        </div>
        <button 
          type="submit" 
          className="submit-btn"
        >Submit
        </button>
      </form>
      <div className="register-box">
        <p>Register yet? Click to <a href="#">Register</a></p>
      </div>
    </div>
  )
};

LoginDetails.propTypes = {
  handleSubmit: PropTypes.func,
  submitForm: PropTypes.func
  
};

export default reduxForm({
  form: 'login'
})(LoginDetails)