import React from "react";

import './navbarStyles.css';


function Navbar(props) {
  const { brand } = props
  return (
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">{brand}</a>
    </nav>
  )
}


export default Navbar;
