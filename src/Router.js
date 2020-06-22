import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';
import CreatePost from './pages/CreatePost';
import Timeline from './pages/Timeline';
import httpClient from './actions/httpClient';
const currentUser = httpClient.getCurrentUser();
const routes = (
      <Route>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/forget-password" component={ForgetPassword}/>
        <Route exact path="/posts/create" componcent={CreatePost}/>
        <Route exact path="/" component={Timeline}/>
      </Route>
)
export default routes;