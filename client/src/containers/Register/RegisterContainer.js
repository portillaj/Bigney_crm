import React, { Component } from 'react';
import Register from '../../components/Register/Register';
import classes from './RegisterContainer.css';

class RegisterContainer extends Component {
  render() {
    return (
      <div className={classes['signup-background']}>
        <Register />
      </div>
    );
  }
}

export default RegisterContainer;
