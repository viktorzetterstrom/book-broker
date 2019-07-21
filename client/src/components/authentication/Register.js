import React, { useContext, useState } from 'react';
import authService from '../../services/auth-service';
import UserContext from '../../contexts/UserContext';
import { Redirect } from 'react-router-dom';
import { Button, Form, Input, Label } from '../basic-components';
import notifyService from '../../services/notify-service';

export function Register(props) {
  const userContext = useContext(UserContext);
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  // const { from } = props.location.state || { from: { pathname: '/' } };

  const register = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const email = e.target.email.value;
    authService.register(username, email, password, (success) => {
      if (success) {
        notifyService.registerSuccess();
        authService.login(username, password, (user) => {
          setRedirectToReferrer(true);
          userContext.setUser(user);
        });
      } else {
        notifyService.registerFailure();
      }
    });
  };

  if (redirectToReferrer === true) return <Redirect to="/trades" />;
  return (
    <div>
      <Form alignRight submitHandler={register}>
        <Label>Username<Input name="username" type="text" required /></Label>
        <Label>Email<Input name="email" type="email" required /></Label>
        <Label>Password<Input name="password" type="password" required /></Label>
        <Button>Register</Button>
      </Form>
    </div>
  );
};
