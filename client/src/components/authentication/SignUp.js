import React, { useContext, useState } from 'react';
import authService from '../../services/auth-service';
import UserContext from '../../contexts/UserContext';
import { Redirect } from 'react-router-dom';


export default function SignUp(props) {
  const userContext = useContext(UserContext);
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const { from } = props.location.state || { from: { pathname: '/' } };

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

  if (redirectToReferrer === true) return <Redirect to={from} />;
  else return (
    <form onSubmit={signUp}>
      <label>Username<input name="username" type="text" required /></label>
      <label>Email<input name="email" type="email" required /></label>
      <label>Password<input name="password" type="password" required /></label>
      <input type="submit" />
    </form>
  );
};
