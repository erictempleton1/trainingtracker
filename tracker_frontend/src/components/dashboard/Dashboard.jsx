import React, { Component, Fragment } from 'react';

import Content from '../content/Content';
import Main from '../main/Main';
import Navbar from '../navbar/Navbar';
import Row from '../row/Row';
import DashboardSidebar from '../../containers/sidebar/DashboardSidebar';

import WorkoutsCompletedCard from '../../containers/cards/WorkoutsCompletedCard';
import WorkoutsRemainingCard from '../../containers/cards/WorkoutsRemainingCard';
import MetricTotalCard from '../../containers/cards/MetricTotalCard';
import WorkoutTable from '../../containers/tables/WorkoutTable';



class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Navbar brand={"TrainingTracker"} />
        <Content>
          <DashboardSidebar />
          <Main>
            <Row>
              <WorkoutsCompletedCard />
              <WorkoutsRemainingCard />
              <MetricTotalCard />
            </Row>
            <Row>
              <WorkoutTable />
            </Row>
          </Main>
        </Content>
      </Fragment>
    );
  }
}

export default Dashboard;