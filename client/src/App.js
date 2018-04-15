import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SigninContainer from './containers/Signin/SigninContainer';

class App extends Component {
  render() {
    return (
      <div>
       <SigninContainer />
      </div>
    );
  }
}

export default App;
