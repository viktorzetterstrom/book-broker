import React from 'react';
import { Register } from '../authentication';
import { Link } from 'react-router-dom';
import { Button, Header, FlexContainerVertical, Or } from '../basic-components';

export function RegisterView() {
  return (
    <div>
      <Header />
      <FlexContainerVertical>
        <Register />
        <Or />
        <Link to="/login"><Button>Log in</Button></Link>
      </FlexContainerVertical>
    </div>
  );
}
