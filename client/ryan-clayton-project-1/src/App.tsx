import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainComponent from './components/main-component';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainComponent/>
      </div>
    </BrowserRouter>
  );
}

export default App;
