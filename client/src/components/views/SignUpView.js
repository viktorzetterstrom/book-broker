import React from 'react';
import { SignUp } from '../authentication';
import { Link } from 'react-router-dom';
import { Button, Header, FlexContainerVertical, Spinner } from '../basic-components';

export default function SignUpView() {
  return (
    <div>
      <Header />
      <FlexContainerVertical>
        <SignUp />
        <Link to="/login"><Button>To log in</Button></Link>
      </FlexContainerVertical>
    </div>
  );
}
