import React from 'react';
import Header from '../components/Header';
import './AuthLayout.scss';

const ShopLayout = props => (
  <div className="h-100">
    <Header />
    <div className="main-layout">
      {props.children}
    </div>
  </div>
)

export default ShopLayout;
