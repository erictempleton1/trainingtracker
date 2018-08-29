import React from 'react';


function Card(props) {
  const {title, text} = props;
  return (
    <div className="col-sm-4">
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  )
}


export default Card;
