import React from 'react';

export default function CreateUser(props) {
  return (
    <form method="POST" action="/api/users">
      <label>Username<input name="username" type="text" required/></label>
      <label>Email<input name="email" type="email" required/></label>
      <label>Password<input name="password" type="password" required /></label>
      <input type="submit" />
    </form>
  );
};
