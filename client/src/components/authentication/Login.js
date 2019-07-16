import React, { useState, useContext} from 'react';
import UserContext from '../../contexts/UserContext';
import { Redirect } from 'react-router-dom';
import authService from '../../services/auth-service';

export default function Login(props) {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const userContext = useContext(UserContext);
  const { from } = props.location.state || { from: { pathname: '/' } };

  const login = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value
    authService.login(username, password, (user) => {
      setRedirectToReferrer(true);
      userContext.setUser(user);
    });
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


