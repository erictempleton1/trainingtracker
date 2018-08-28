import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import Card from './components/card/Card';
import Content from './components/content/Content';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Row from './components/row/Row';
import Sidebar from './components/sidebar/Sidebar';
import Table from './components/table/Table';


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
              <Card />
              <Card />
              <Card />
            </Row>
            <Table />
          </Main>
        </Content>
      </Fragment>
    );
  }
}

export default App;
