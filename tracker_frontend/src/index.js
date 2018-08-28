import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';



ReactDOM.render(
    <Router>
        <Route exact path="/" component={App} />
    </Router>,
document.getElementById('root'));
registerServiceWorker();
