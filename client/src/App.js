import React, { Component } from 'react';
import LoginContainer from './containers/Login/LoginContainer';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';

import Register from './components/Register/Register';

class App extends Component {
  render() {
    return (
      <div className="login-container">
        <BrowserRouter>
          <div>
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/register" component={Register} />
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
