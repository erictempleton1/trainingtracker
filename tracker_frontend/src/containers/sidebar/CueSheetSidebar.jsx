import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../../components/sidebar/Sidebar';


const cueSheetLinks = (
  <Fragment>
    <li className="nav-item">
      <Link className="nav-link" to="/">
        Dashboard
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link active" to="/cuesheet">
        Cue Sheet
      </Link>
    </li>
  </Fragment>
);

function CueSheetSidebar() {
    return (
        <Sidebar links={cueSheetLinks} />
    );
}

export default CueSheetSidebar;