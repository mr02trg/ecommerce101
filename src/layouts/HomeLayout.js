import React from 'react';
import Header from '../components/Header';
import './HomeLayout.scss';

const HomeLayout = props => (
  <div className="home-layout">
    <Header />
    <div className="home-content">{props.children}</div>
  </div>
)

export default HomeLayout;
