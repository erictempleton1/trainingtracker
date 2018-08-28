import React from 'react';


function Content(props) {
    return (
      <div className="container-fluid">
        <div className="row">
          {props.children}
        </div>
      </div>
    );
}

export default Content;
