import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, REGISTER_USER } from './types';
const axios = require('axios');

const ROOT_URL = 'http://localhost:5000';

export function signinUser({ email, password }, callback) {
  return function(dispatch) {
    //Submit email/password to the server
    axios
      .post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        //if request is good ...
        //update state to indicate user is authenticated
        // - save the JWT Token
        localStorage.setItem('token', response.data.token);
        // redirect to the route/dashboard
        dispatch({ type: AUTH_USER });
        callback();
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'));
      });
  };
}

export function signoutUser(callback) {
  return function(dispatch) {
    //Submit email/password to the server
    axios.get(`/api/logout`).then(response => {
      localStorage.removeItem('token');
      // redirect to the route/dashboard
      dispatch({ type: UNAUTH_USER });
      callback();
    });
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
