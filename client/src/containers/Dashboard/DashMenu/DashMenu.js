import React, { Component } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import classes from './DashMenu.css';

import DashMenuList from '../../../components/Dashboard/DashMenu/DashMenuList';

class DashMenu extends Component {
  render() {
    this.state = {
      sidebarList: ['Dashboard', 'Clients', 'Calendar', 'Chat', 'Payments', 'Invoices']
    };
    return (
      <div>
        <DashMenuList sidebarList={this.state.sidebarList} />
      </div>
    );
  }
}

export default DashMenu;
