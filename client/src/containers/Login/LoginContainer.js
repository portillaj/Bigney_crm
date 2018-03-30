import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginDetails from '../../components/Login/LoginDetails';
import './LoginContainer.css';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(values) {
    console.log(values);
  }
  render() {
    return (
      <div class="signup__container">
  <div class="container__child signup__thumbnail">
    <div class="thumbnail__logo">
      
      <h1 class="logo__text">The Law Hub</h1>
    </div>
    <div class="thumbnail__content text-center">
      <h1 class="heading--primary">Welcome to the Hub.</h1>
      <h2 class="heading--secondary">Where Law is made easier</h2>
    </div>
    <div class="thumbnail__links">
      <ul class="list-inline">
        <li class="google-link"><a href="http://alexdevero.com/"><i class="fab fa-google"></i>Sign in with Google</a></li>
      </ul>
    </div>
    <div class="signup__overlay"></div>
  </div>
  <div class="container__child signup__form">
    <form action="#">
      <div class="form-group">
        <label for="username">Username</label>
        <input class="form-control" type="text" name="username" id="username" placeholder="portillaj" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input class="form-control" type="text" name="email" id="email" placeholder="example@gmail.com" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input class="form-control" type="password" name="password" id="password" placeholder="********" required />
      </div>
      <div class="form-group">
        <label for="passwordRepeat">Repeat Password</label>
        <input class="form-control" type="password" name="passwordRepeat" id="passwordRepeat" placeholder="********" required />
      </div>
      <div class="m-t-lg">
        <ul class="list-inline">
          <li>
            <input class="btn btn--form" type="submit" value="Register" />
          </li>
          <li class="already-member">
            <a class="signup__link" href="#">I am already a member</a>
          </li>
        </ul>
      </div>
    </form>  
  </div>
</div>
      /*<div className="login-background d-flex">
        <div className="container login-box">
          <LoginDetails submitForm={this.submitForm}/>
        </div>
      </div>*/
    )
  }
}

LoginContainer.propTypes = {
  submtForm: PropTypes.func
};

export default LoginContainer;