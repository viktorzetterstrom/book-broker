import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import authService from '../../services/auth-service';
import UserContext from '../../contexts/UserContext';
import Button from '../Button';

const SignOutButton = withRouter(({ history }) => {
  const userContext = useContext(UserContext)

  return authService.isAuthenticated ? (
    <p>
      Welcome! <Button onClick={() => {
        authService.signout(() => {
          history.push('/')
          userContext.setUser(null);
        });
      }}>Sign out</Button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
});

export default SignOutButton;