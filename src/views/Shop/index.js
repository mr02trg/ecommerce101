import React from 'react';
import './style.scss';
import withAuth from 'hoc/withAuth';

const ShopPage = () => (
  <div>This is where you will shop</div>
);

export default withAuth(ShopPage);