import React, { Component } from 'react';
import SigninContainer from './containers/Signin/SigninContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import RegisterContainer from './containers/Register/RegisterContainer';
import Header from './components/Dashboard/Header';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/signin" component={SigninContainer} />
            <Route exact path="/register" component={RegisterContainer} />
            <Route exact path="/dashboard" component={Header} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
