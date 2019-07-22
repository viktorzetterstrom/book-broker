import React from 'react';
import { Register } from '../authentication';
import { Link } from 'react-router-dom';
import { HeaderTitle, HeaderText, Button, Header, FlexContainerVertical, Or } from '../basic-components';

export function RegisterView() {
  return (
    <div>
      <Header>
        <HeaderTitle>Bookbroker</HeaderTitle>
        <HeaderText>BookBroker is an app for trading your old books for new ones.</HeaderText>
        <Link to="/trades"><Button primary>Browse</Button></Link>
      </Header>
      <FlexContainerVertical>
        <Register />
        <Or />
        <Link to="/login"><Button secondary>Log in</Button></Link>
      </FlexContainerVertical>
    </div>
  );
}
