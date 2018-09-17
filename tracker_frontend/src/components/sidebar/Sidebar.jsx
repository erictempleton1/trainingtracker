import React from "react";

import './sidebarStyles.css';


function Sidebar(props) {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          {props.links}
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
