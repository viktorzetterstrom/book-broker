import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import authService from './auth-service';

export default function Login(props) {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const { from } = props.location.state || { from: { pathname: '/' } };

  const login = e => {
    e.preventDefault();
    authService.authenticate(() => setRedirectToReferrer(true))
  }

  if (redirectToReferrer === true) return <Redirect to={from} />
  else return (
  <form onSubmit={login}>
    <label>Username<input name="username" type="text" /></label>
    <label>Password<input name="password" type="password" /></label>
    <input type="submit" />
  </form>
  )
};


