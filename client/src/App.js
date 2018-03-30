import React, { Component } from 'react';
import LoginContainer from './containers/Login/LoginContainer';
import { BrowserRouter, Route } from 'react-router-dom';

import Register from './components/Register/Register';

class App extends Component {
  render() {
    return (
      <div>
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
