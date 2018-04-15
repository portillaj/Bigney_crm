import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './SigninContainer.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Signin from '../../components/Signin/Signin';

class SigninContainer extends Component {
  render() {
    return (
      <div className={classes.signinBackground}>
      <div className={Bootstrap.container}>
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