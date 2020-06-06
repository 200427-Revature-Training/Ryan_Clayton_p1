import React, { useState } from 'react';
import ManagerHome from './manager-components/manager-home';
import HeaderComponent from './architecture/header-component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EmployeeHome from './employee-components/employee-home';
import LoginComponent from './login-component/login-component'
import { ProtectedRoute } from './login-component/protected.route';



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
            <ProtectedRoute exact path="/employee" component={EmployeeHome}/>
            <ProtectedRoute exact path="/manager" component={ManagerHome}/>

          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default MainComponent;
