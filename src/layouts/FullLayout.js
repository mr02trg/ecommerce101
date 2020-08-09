import React from 'react';
import Header from '../components/Header';
import './FullLayout.scss';

const FullLayout = props => (
  <div className="full-layout">
    <Header />
    <div className="full-content">{props.children}</div>
  </div>
)

export default FullLayout;
