import React from 'react';
import { SignUp } from '../authentication';
import { Link } from 'react-router-dom';
import { Button, Header, FlexContainerVertical, Or } from '../basic-components';

export default function SignUpView() {
  return (
    <div>
      <Header />
      <FlexContainerVertical>
        <SignUp />
        <Or />
        <Link to="/login"><Button>Log in</Button></Link>
      </FlexContainerVertical>
    </div>
  );
}
