import React from 'react';
import classes from './DashMenuList.css';

const DashMenuList = props => {
  const navMenu = props.sidebarList.map(item => {
    return (
      <ul className={classes.navMenu}>
        <li className={classes.navItem}>
          <i className={`${item.icon} ${classes.icons}`} />
          {item.name}
        </li>
      </ul>
    );
  });

  return <div>{navMenu}</div>;
};

export default DashMenuList;
