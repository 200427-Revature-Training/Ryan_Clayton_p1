import React from 'react';
import './App.css';
import ManagerHome from './components/manager-components/manager-home';
import HeaderComponent from './components/architecture/header-component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EmployeeHome from './components/employee-components/employee-home';
import LoginComponent from './components/login-component/login-component'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <main>
          <Switch>
            <Route path="/login">
              <LoginComponent></LoginComponent>
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

export default App;
