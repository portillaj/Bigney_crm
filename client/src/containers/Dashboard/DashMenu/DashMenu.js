import React, { Component } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import classes from './DashMenu.css';

import DashMenuList from '../../../components/Dashboard/DashMenu/DashMenuList';

class DashMenu extends Component {
  render() {
    this.state = {
      sidebarList: [
        { name: 'Dashboard', icon: 'fab fa-gitter' },
        { name: 'Clients', icon: 'fas fa-users' },
        { name: 'Calendar', icon: 'far fa-calendar-alt' },
        { name: 'Chat', icon: 'far fa-comments' },
        { name: 'Payments', icon: 'far fa-credit-card' },
        { name: 'Invoices', icon: 'far fa-file-alt' }
      ]
    };
    return (
      <div>
        <DashMenuList sidebarList={this.state.sidebarList} />
      </div>
    );
  }
}

export default DashMenu;
