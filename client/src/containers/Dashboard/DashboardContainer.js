import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/';
import { withRouter } from 'react-router-dom';

import Header from '../../components/Dashboard/Header';
import DashMenu from './DashMenu/DashMenu';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.renderLinks = this.renderLinks.bind(this);
	}

	renderLinks(){
		if(this.props.auth) {
			return (
				// show a link to sign router
				<li className="nav-item">
					<button className="nav-link" 
					onClick={() => this.props.signoutUser(() => {
						this.props.history.push('/signin');
					})}>Sign Out</button>
				</li>
			)
		}
	};

	render() {
		console.log(this.props);
		return (
			<div>
				<Header renderLinks={ this.renderLinks() } />
				<DashMenu />
			</div>
		);
	}
}

const mapStateToProps = ({ auth, form }) => {
    return {
        auth,
		form
    };
};

// const actions = {
// 	signoutUser,
// 	signinUser
// };

export default connect(mapStateToProps, actions)(withRouter(Dashboard));