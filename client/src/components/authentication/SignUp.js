import React, { useContext, useState } from 'react';
import authService from '../../services/auth-service';
import UserContext from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import { Button, Form, Input, Label } from '../basic-components';

export function SignUp(props) {
  const userContext = useContext(UserContext);
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  // const { from } = props.location.state || { from: { pathname: '/' } };

  const signUp = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const email = e.target.email.value;
    authService.signup(username, email, password, (success) => {
      if (success) {
        authService.login(username, password, (user) => {
          setRedirectToReferrer(true);
          userContext.setUser(user);
        });
      }
    });
  };

  // if (redirectToReferrer === true) return <Redirect to={from} />;
  return (
    <div>
      <Form submitHandler={signUp}>
        <Label>Username<Input name="username" type="text" required /></Label>
        <Label>Email<Input name="email" type="email" required /></Label>
        <Label>Password<Input name="password" type="password" required /></Label>
        <Button>Sign up</Button>
      </Form>
    </div>
  );
};
