import React, { useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { Redirect } from 'react-router-dom';
import authService from '../../services/auth-service';
import { InputContainer, Button, Form, Input, Label } from '../basic-components';
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
      <InputContainer>
        <Input id="username" name="username" type="text" />
        <Label htmlFor="username">Username</Label>
      </InputContainer>
      <InputContainer>
        <Input id="password" name="password" type="password" />
        <Label htmlFor="password">Password</Label>
      </InputContainer>
      <Button primary>Log in</Button>
    </Form>
  );
};


