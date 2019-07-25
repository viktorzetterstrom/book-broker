import React from 'react';
import { Login } from '../authentication';
import { Link } from 'react-router-dom';
import { HeaderTitle, HeaderText, Button, Header, FlexContainerVertical, Or } from '../basic-components';

export function LoginView() {
  return (
    <div>
      <Header>
        <HeaderTitle>Bookbroker</HeaderTitle>
        <HeaderText>Bookbroker is an app for trading your old books for new ones.</HeaderText>
        <Link to="/trades"><Button primary>Browse</Button></Link>
      </Header>
      <FlexContainerVertical>
        <Login />
        <Or />
        <Link to="/register"><Button secondary>Register</Button></Link>
      </FlexContainerVertical>
    </div>
  );
}
