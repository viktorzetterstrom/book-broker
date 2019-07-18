import React from 'react';
import { Login } from '../authentication';
import { Link } from 'react-router-dom';
import { Button, Header, FlexContainerVertical } from '../basic-components';

export default function SignInView() {
  return (
    <div>
      <Header />
      <Login />
      <FlexContainerVertical>
        <Link to="/register"><Button>Register</Button></Link>
      </FlexContainerVertical>
    </div>
  );
}
