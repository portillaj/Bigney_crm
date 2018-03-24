import React from 'react';
import './Register.css';

const Register = () => {
    return(
        <div className="container">
          <div className="head-info">
						<h1>SIGN UP</h1>
						<h2>Hello and Welcome! Tell us a bit about you</h2>
					</div>
				<form>
					<li>
						<input type="text" className="text" placeholder="Name" />
                       
					</li>
					<li>
						<input type="text" className="text" placeholder="Email" />
                       
					</li>
					<li>
						<input type="password" placeholder="Password" />
					</li>
					<div class="p-container">
								<input type="submit" value="SIGN UP" />
					</div>
				</form>
                </div>
    );
};

export default Register;