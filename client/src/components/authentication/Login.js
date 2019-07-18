import React, { useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { Redirect } from 'react-router-dom';
import authService from '../../services/auth-service';
import { Button, Form, Input, Label } from '../basic-components';


export function Login({ from='/books/add/trade' }) {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const userContext = useContext(UserContext);
  // const { from } = props.location.state || { from: { pathname: '/' } };

  const login = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value
    authService.login(username, password, (user) => {
      setRedirectToReferrer(true);
      userContext.setUser(user);
    });
  };

  if (redirectToReferrer === true) {
    return <Redirect to={from} />;
  } else return (
    <Form submitHandler={login}>
      <Label>Username<Input name="username" type="text" /></Label>
      <Label>Password<Input name="password" type="password" /></Label>
      <Button>Log in</Button>
    </Form>
  );
};


