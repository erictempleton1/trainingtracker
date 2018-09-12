import React from 'react';


function Button(props) {
  return (
    <button type="button" class="btn btn-outline-primary">{props.children}</button>
  );
}

export default Button;
