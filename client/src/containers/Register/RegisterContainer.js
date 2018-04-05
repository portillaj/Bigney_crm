import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Register from '../../components/Register/Register';
import './RegisterContainer.css';

class RegisterContainer extends Component {
  render() {
    return (
    <div className="signup-background">
             
          <Register />
    </div>
    );
  }
}

export default RegisterContainer;