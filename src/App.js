import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';

import Login from './component/login/login';
import Homepage from './component/homepage/homepage';
import Profile from './component/profile/profile';

import PrivateRoute from './component/privateroute/privateroute';
import PublicRoute from './component/publicroute/publicroute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Homepage}></PrivateRoute>
          <PublicRoute restricted={true} path="/login" component={Login}></PublicRoute>
          <PrivateRoute path="/profile" component={Profile}></PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
