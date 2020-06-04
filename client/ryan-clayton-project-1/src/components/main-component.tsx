import React, { useState } from 'react';
import ManagerHome from './manager-components/manager-home';
import HeaderComponent from './architecture/header-component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EmployeeHome from './employee-components/employee-home';
import LoginComponent from './login-component/login-component'



const MainComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <main>
          <Switch>
            <Route path="/login">
              <LoginComponent />
            </Route>
            <Route path="/employee">
              <EmployeeHome />
            </Route>
            <Route path="/manager">
              <ManagerHome />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default MainComponent;
