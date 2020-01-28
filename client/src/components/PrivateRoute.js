import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
    let loggedIn = localStorage.getItem('token');

    return (
        <Route
            {...rest}
            render={props => {
                return loggedIn ? <Component {...props} /> : <Redirect to='/login' />;
            }}
        />
    );
}