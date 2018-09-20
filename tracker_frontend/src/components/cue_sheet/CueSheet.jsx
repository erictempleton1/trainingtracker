// todo - create cue sheet page (similar to dashboard)
import React, { Component, Fragment } from 'react';

import Content from '../content/Content';
import Main from '../main/Main';
import Navbar from '../navbar/Navbar';
import Row from '../row/Row';
import CueSheetSidebar from '../../containers/sidebar/CueSheetSidebar';


function CueSheet(props) {
  return (
    <Fragment>
      <Navbar brand={"TrainingTracker"} />
      <Content>
        <CueSheetSidebar />
        <Main>
          <Row>
          {"hello"}
          </Row>
        </Main>
      </Content>
    </Fragment>
  );
}


export default CueSheet;
