import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import Dashboard from './components/dashboard/Dashboard';
import CueSheet from './components/cue_sheet/CueSheet';


ReactDOM.render(
  <Router>
    <Fragment>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/cuesheet" component={CueSheet} />
    </Fragment>
  </Router>,
document.getElementById('root'));
registerServiceWorker();
