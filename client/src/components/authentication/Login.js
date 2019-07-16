import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import authService from '../../services/auth-service';

export default function Login(props) {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const { from } = props.location.state || { from: { pathname: '/' } };

  const login = e => {
    e.preventDefault();
    console.log(e.target.username.value);
    authService.authenticate(e.target.username.value, e.target.password.value, () => setRedirectToReferrer(true));
  };

  if (redirectToReferrer === true) return <Redirect to={from} />;
  else return (
    <form onSubmit={login}>
      <label>Username<input name="username" type="text" /></label>
      <label>Password<input name="password" type="password" /></label>
      <input type="submit" />
    </form>
  );
};


