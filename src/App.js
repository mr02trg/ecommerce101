import React from 'react';
import { Switch, Route } from "react-router-dom";

import Homepage from './views/Homepage';
import Maintainance from './views/Maintainance';
import { AuthLayout, UnauthLayout } from './layouts';
import LoginPage from './views/Auth/Login';
import RegisterPage from './views/Auth/Register';

const App = () => (
  <Switch>
    <Route exact path="/">
      <UnauthLayout>
        <Homepage />
      </UnauthLayout>
    </Route>

    <Route path="/login">
      <UnauthLayout>
        <LoginPage />
      </UnauthLayout>
    </Route>
    <Route path="/register">
      <UnauthLayout>
        <RegisterPage />
      </UnauthLayout>
    </Route>
    <Route path="*">
      <UnauthLayout>
        <Maintainance />
      </UnauthLayout>
    </Route>
  </Switch>
);

export default App;
