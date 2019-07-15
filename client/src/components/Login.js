import React from 'react';

export default function Login(props) {
  return (
    <form method="POST" action="/api/login">
      <label>Username<input name="username" type="text" /></label>
      <label>Password<input name="password" type="password" /></label>
      <input type="submit" />
    </form>
  );
};
