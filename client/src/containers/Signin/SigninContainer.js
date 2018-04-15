import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SigninContainer.css';
import Signin from '../../components/Signin/Signin';
import './SigninContainer.css';

class SigninContainer extends Component {
  render() {
    return (
      <div className="signin-background">
      <div className="container">
        <Signin />
      </div>
      </div>
    );
  }
}

SigninContainer.propTypes = {
  submtForm: PropTypes.func
};

export default SigninContainer;