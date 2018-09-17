import React, { Fragment } from 'react';

import Sidebar from '../../components/sidebar/Sidebar';


const dashboardLinks = (
  <Fragment>
    <li className="nav-item">
      <a className="nav-link active" href="#">
        Dashboard <span className="sr-only">(current)</span>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        Cue Sheet
      </a>
    </li>
  </Fragment>
)

function DashboardSidebar() {
  return (
    <Sidebar links={dashboardLinks} />
  );
}


export default DashboardSidebar;
