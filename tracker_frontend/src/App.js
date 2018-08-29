import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import Content from './components/content/Content';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Row from './components/row/Row';
import Sidebar from './components/sidebar/Sidebar';
import Table from './components/table/Table';

import WorkoutsCompletedCard from './containers/cards/WorkoutsCompletedCard';
import WorkoutsRemainingCard from './containers/cards/WorkoutsRemainingCard';
import MetricTotalCard from './containers/cards/MetricTotalCard';


// todo - rename file

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar brand={"TrainingTracker"} />
        <Content>
          <Sidebar />
          <Main>
            <Row>
              <WorkoutsCompletedCard />
              <WorkoutsRemainingCard />
              <MetricTotalCard />
            </Row>
            <Table />
          </Main>
        </Content>
      </Fragment>
    );
  }
}

export default App;
