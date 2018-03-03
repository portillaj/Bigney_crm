import React, { Component } from 'react';
import '../../style/style.scss';
import LoginContainer from '../containers/LoginContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <LoginContainer />
      </div>
    );
  }
}