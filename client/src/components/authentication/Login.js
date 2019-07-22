import React, { useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { Redirect } from 'react-router-dom';
import authService from '../../services/auth-service';
import { Button, Form, Input, Label } from '../basic-components';
import notifyService from '../../services/notify-service';


export function Login({ from = '/trades' }) {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const userContext = useContext(UserContext);
  // const { from } = props.location.state || { from: { pathname: '/' } };

  const login = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value
    authService.login(username, password, (user) => {
      if (!user) return notifyService.loginFailure();
      else {
        notifyService.loginSuccess(username);
        setRedirectToReferrer(true);
        userContext.setUser(user);
      }
    });
  };

  if (redirectToReferrer === true) {
    return <Redirect to={from} />;
  } else return (
    <Form submitHandler={login}>
      <Label>Username<Input name="username" type="text" /></Label>
      <Label>Password<Input name="password" type="password" /></Label>
      <Button primary>Log in</Button>
    </Form>
  );
};


