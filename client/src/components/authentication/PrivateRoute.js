import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authService from './auth-service';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    authService.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }}}
        />
  )} />
)

export default PrivateRoute;
