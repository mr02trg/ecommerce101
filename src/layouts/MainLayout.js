import React from 'react';
import Header from '../components/Header';
import './MainLayout.scss';

const MainLayout = props => (
  <div className="h-100">
    <Header />
    <div className="main-layout">
      {props.children}
    </div>
  </div>
)

export default MainLayout;
