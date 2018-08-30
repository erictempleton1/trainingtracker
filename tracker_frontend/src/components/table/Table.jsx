import React from 'react';

import './tableStyles.css';


function Table(props) {
  const { headers, tableRows } = props;
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            {headers.map(header => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map(row => (
            <tr>
              {row.map(cell => (
                <td>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


export default Table;
