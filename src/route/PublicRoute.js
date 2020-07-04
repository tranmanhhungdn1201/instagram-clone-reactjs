import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import httpClient from '../actions/httpClient';

const PublicRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => {
            return httpClient.isLogin() ?
            <Redirect to="/" />
        : <Component {...props} />
        }} />
    );
};

export default PublicRoute;