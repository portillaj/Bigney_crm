import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="navbar navbar-light">
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    Signin
                </li>
            </ul>

            </div>
        );
    }
}

export default Header;
