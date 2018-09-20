import React, { Component, Fragment } from 'react';

import Content from '../content/Content';
import Main from '../main/Main';
import Navbar from '../navbar/Navbar';
import Row from '../row/Row';
import CueSheetSidebar from '../../containers/sidebar/CueSheetSidebar';
import CueSheetTable from '../../containers/tables/CueSheetTable';


function CueSheet(props) {
  return (
    <Fragment>
      <Navbar brand={"TrainingTracker"} />
      <Content>
        <CueSheetSidebar />
        <Main>
          <Row>
            <CueSheetTable />
          </Row>
        </Main>
      </Content>
    </Fragment>
  );
}


export default CueSheet;
