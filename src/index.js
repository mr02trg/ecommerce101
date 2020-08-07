import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import history from './history';
import ReactNotification from 'react-notifications-component';

import App from './App';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-notifications-component/dist/theme.css'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router history={history}>
        <ReactNotification />
        <App />
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
