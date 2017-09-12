import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import ListApps from './components/ListApps';
import AppSingle from './components/AppSingle';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/list-apps" component={ListApps} />
      <Route path="/app-single" component={AppSingle} />
    </div>
  </Router>, document.getElementById('root'));
registerServiceWorker();
