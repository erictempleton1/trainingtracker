import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../../components/sidebar/Sidebar';


const dashboardLinks = (
  <Fragment>
    <li className="nav-item">
      <Link className="nav-link active" to="/">
        Dashboard
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/cuesheet">
        Cue Sheet
      </Link>
    </li>
  </Fragment>
);

function DashboardSidebar() {
  return (
    <Sidebar links={dashboardLinks} />
  );
}


export default DashboardSidebar;
