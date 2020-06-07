import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';

const routes = (
      <Route>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/forget-password" component={ForgetPassword}/>
      </Route>
)
export default routes;