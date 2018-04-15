import React, { ReactFragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import requireAuth from './components/RequireAuth';
import App from './App';
import RegisterContainer from './containers/Register/RegisterContainer';
import Dashboard from './containers/Dashboard/DashboardContainer';
import reducers from './reducers';
const middlewares = [reduxThunk, logger];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
     <Router>
      <div>
         <Route exact path="/signin" component={ App } />
        <Route exact path="/register" component={ RegisterContainer } />
        <Route path="/dashboard" component={ requireAuth(Dashboard) } />
       </div>
        </Router>
  </Provider>
  , document.getElementById('root'));