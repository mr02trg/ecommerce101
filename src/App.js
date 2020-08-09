import React from 'react';
import { Switch, Route } from "react-router-dom";

import Homepage from './views/Homepage';
import Maintainance from './views/Maintainance';
import { MainLayout, FullLayout } from './layouts';
import LoginPage from './views/Auth/Login';
import RegisterPage from './views/Auth/Register';
import ShopPage from 'views/Shop';
import AdminDashboard from 'views/Admin/Dashboard';

const App = () => (
  <Switch>
    <Route exact path="/">
      <FullLayout>
        <Homepage />
      </FullLayout>
    </Route>
    <Route path="/login">
      <FullLayout>
        <LoginPage />
      </FullLayout>
    </Route>
    <Route path="/register">
      <FullLayout>
        <RegisterPage />
      </FullLayout>
    </Route>
    <Route path="/shop">
      <MainLayout>
        <ShopPage />
      </MainLayout>
    </Route>
    <Route path="/dashboard">
      <FullLayout>
        <AdminDashboard />
      </FullLayout>
    </Route>
    <Route path="*">
      <FullLayout>
        <Maintainance />
      </FullLayout>
    </Route>
  </Switch>
);

export default App;
