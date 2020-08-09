import React, { useState } from 'react';

import withAdminAuth from 'hoc/withAdminAuth';
import UserManger from 'components/UserManager';
import PetManager from 'components/PetManager';

import './style.scss';

const AdminDashboard = () => {

  const [view, setView] = useState('');

  const renderDashboardContent = () => {
    switch(view) {
      case 'users':
        return <UserManger />
      default:
        return <PetManager />
    }
  }

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-nav">
        <button className="nav-item" type="button" onClick={() => setView('pets')}>Pets</button>
        <button className="nav-item" type="button" onClick={() => setView('users')}>Users</button>
      </div>
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <div>{renderDashboardContent()}</div>
      </div>
    </div>
  )
};

export default withAdminAuth(AdminDashboard);