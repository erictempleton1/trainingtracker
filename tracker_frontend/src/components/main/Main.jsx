import React from 'react';

import './mainStyles.css';


function Main(props) {
  return (
    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
      {props.children}
    </main>
  )
}


export default Main;
