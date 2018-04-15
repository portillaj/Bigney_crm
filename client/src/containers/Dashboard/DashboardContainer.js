import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/';
import { withRouter } from 'react-router-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import classes from './Dashboard.css';

import Header from '../../components/Dashboard/Header';
import DashMenu from './DashMenu/DashMenu';
import DashMainContent from './DashMainContent/DashMainContent';
import DashProfile from './DashProfile/DashProfile';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.renderLinks = this.renderLinks.bind(this);
  }

  renderLinks() {
    if (this.props.auth) {
      return (
        <li className="nav-item">
          <button
            className="nav-link"
            onClick={() =>
              this.props.signoutUser(() => {
                this.props.history.push('/signin');
              })
            }
          >
            Sign Out
          </button>
        </li>
      );
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className={Bootstrap['container-fluid']}>
        <div className={Bootstrap.row}>
          <div className={`${Bootstrap['col-md-2']} ${classes.dashLeftHeader}`}>
            <DashProfile />
          </div>
          <div className={`${Bootstrap['col-md-10']} ${classes.dashMainHeader}`}>
            <Header />
          </div>
        </div>

        <div className={Bootstrap.row}>
          <div className={`${Bootstrap['col-md-2']} ${classes.leftNav}`}>
            <DashMenu />
          </div>
          <div className={`${Bootstrap['col-md-10']} ${classes.mainSection}`}>
            <DashMainContent />
          </div>
        </div>
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
