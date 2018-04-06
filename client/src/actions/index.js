import { 
	AUTH_USER, 
	AUTH_ERROR 
} from './types';
import { BrowserRouter } from 'react-router-dom';
const axios = require('axios');



const ROOT_URL = 	'http://localhost:5000';

export function signinUser({ email, password }, callback) {
  return function(dispatch) {
    //Submit email/password to the server
		axios.post(`${ROOT_URL}/signin`, { email, password })
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
			//if request is bad
    	//show an error to the user
			dispatch(authError('Bad Login Info'));
		});
  }
}

export function authError(error) {
	return {
		tyep: AUTH_ERROR,
		payload: error
	}
};