import React from 'react';
import {withRouter} from 'react-router-dom';
import authService from './auth-service';

const SignOutButton = withRouter(({ history }) => (
  authService.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        authService.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
));

export default SignOutButton;