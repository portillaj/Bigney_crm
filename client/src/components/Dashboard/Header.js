import React from 'react';

import './Header.css';

const Header = (props) => {

	return (
		<div className="navbar navbar-light">
			<div className="navbar-brand">The Law Hub</div>
		<ul className="nav navbar-nav">
			{ props.renderLinks }
		</ul>
		</div>
	);
}

export default Header;
