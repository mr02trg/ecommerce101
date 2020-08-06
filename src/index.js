import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import history from './history';

import App from './App';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router history={history}>
        <App />
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
