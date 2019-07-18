import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import authService from '../../services/auth-service';
import UserContext from '../../contexts/UserContext';
import { Button } from '../basic-components';

export const SignOutButton = withRouter(({ history }) => {
  const userContext = useContext(UserContext)

  return authService.isAuthenticated ? (
    <p>
      Logged in as {userContext.user.username} <Button onClick={() => {
        authService.signout(() => {
          history.push('/trades')
          userContext.setUser(null);
        });
      }}>Log out</Button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
});
