import React, { Component } from 'react';
import { RingLoader } from 'react-spinners';
import './Register.css';

class Register extends Component {
    constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
          <div className="signup__container">
        <div className="container__child signup__thumbnail">
            <div className="thumbnail__logo">
            
            <h1 className="logo__text">The Law Hub</h1>
            </div>
            <div className="thumbnail__content text-center">
            <h1 className="heading--primary">Welcome to the Hub.</h1>
            <h2 className="heading--secondary">Where Law is made easier</h2>
            </div>
            <div className="thumbnail__links">
            <ul className="list-inline">
                <li className="google-link"><a href="http://alexdevero.com/"><i className="fab fa-google"></i>Sign in with Google</a></li>
            </ul>
            </div>
            <div className="signup__overlay"></div>
        </div>
            <div className="container__child signup__form">
                <form action="#">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input className="form-control" type="text" name="username" id="username" placeholder="portillaj" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input className="form-control" type="text" name="email" id="email" placeholder="example@gmail.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input className="form-control" type="password" name="password" id="password" placeholder="********" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordRepeat">Repeat Password</label>
                        <input className="form-control" type="password" name="passwordRepeat" id="passwordRepeat" placeholder="********" required />
                    </div>
                    <div className="m-t-lg">
                        <ul className="list-inline">
                        <li>
                            <input className="btn btn--form" type="submit" value="Register" />
                        </li>
                        <li className="already-member">
                            <a className="signup__link" href="#">I am already a member</a>
                        </li>
                        </ul>
                    </div>
                </form>  
            </div>
             <div className='sweet-loading'>
        <RingLoader
          color={'#123abc'} 
          loading={this.state.loading} 
        />
      </div>
            </div>
    );
  }
}

export default Register;