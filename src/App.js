import React from 'react';
import { Switch, Route } from "react-router-dom";

import Homepage from './views/Homepage';
import Maintainance from './views/Maintainance';
import { HomeLayout, PublicLayout } from './layouts';
import LoginPage from './views/Auth/Login';

const App = () => (
  <Switch>
    <Route exact path="/">
      <HomeLayout>
        <Homepage />
      </HomeLayout>
    </Route>

    <Route path="/login">
      <PublicLayout>
        <LoginPage />
      </PublicLayout>
    </Route>
    <Route path="/register">
    </Route>
    <Route path="/forgot-password">
    </Route>
    <Route path="/reset-password">
      <HomeLayout>
        <Maintainance />
      </HomeLayout>
    </Route>
  </Switch>
);

export default App;
