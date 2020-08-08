import React from 'react';
import './style.scss';
import withAdminAuth from 'hoc/withAdminAuth';

const AdminDashboard = () => (
  <div>This is admin only dashboard</div>
);

export default withAdminAuth(AdminDashboard);