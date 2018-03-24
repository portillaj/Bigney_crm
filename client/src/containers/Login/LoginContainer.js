import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginDetails from '../../components/Login/LoginDetails';
import './LoginContainer.css';
import Register from '../../components/Register/Register';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(values) {
    console.log(values);
  }
  render() {
    return (
      <div className="login-background d-fle">
        <div className="container login-box">
          <LoginDetails submitForm={this.submitForm}/>
        </div>
      </div>
    )
  }
}

LoginContainer.propTypes = {
  submtForm: PropTypes.func
};

export default LoginContainer;