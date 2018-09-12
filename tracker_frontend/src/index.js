import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import Dashboard from './components/dashboard/Dashboard';


ReactDOM.render(
    <Router>
        <Route exact path="/" component={Dashboard} />
    </Router>,
document.getElementById('root'));
registerServiceWorker();
