import React from 'react';

import Table from '../../components/table/Table';


const headers = ['Name', 'Type', 'Last Modified'];
const tableRows = [
  ['cell1', 'cell2', 'cell3',],
  ['cell4', 'cell5', 'cell6',],
  ['cell7', 'cell8', 'cell9',],
  ['cell10', 'cell11', 'cell12',],
];

function CueSheetTable() {
  return (
    <div className="col-md-12">
        <Table headers={headers} tableRows={tableRows} />
    </div>
  );
}

export default CueSheetTable;
