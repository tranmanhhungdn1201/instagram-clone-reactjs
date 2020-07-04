import React from 'react';
import { Switch } from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';
import CreatePost from './pages/CreatePost/index';
import Timeline from './pages/Home';
import PrivateRoute from './route/PrivateRoute';
import PublicRoute from './route/PublicRoute';
import UserPost from './pages/UserPost';

const routes = (
      <Switch>
        <PublicRoute exact path="/login" component={Login}/>
        <PublicRoute exact path="/register" component={Register}/>
        <PublicRoute exact path="/forget-password" component={ForgetPassword}/>
        <PrivateRoute exact path="/posts/create" component={CreatePost}/>
        <PrivateRoute exact path="/:username" component={UserPost}/>
        <PrivateRoute exact path="/" component={Timeline}/>
      </Switch>
)
export default routes;