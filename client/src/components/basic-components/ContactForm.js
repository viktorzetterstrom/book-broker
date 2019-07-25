import React from 'react';
import { Button, Chat, Email } from './';
import { Switch, Link, Route } from 'react-router-dom';
import { FlexContainerHorizontal } from './FlexContainerHorizontal';
import styled from 'styled-components';

const ContactDiv = styled.div`
  width: 100%;
  padding: 15px 0;
  margin-bottom: 10px;
  background-color: var(--gray-light);
`;
export function ContactForm({ email, book_title, tradeId, ownerName, userId }) {
  return (
    <>
      <h2>Contact owner of this book</h2>
      <ContactDiv>
        <FlexContainerHorizontal evenly>
          <Link to={`/trades/${tradeId}/chat`}><Button primary card>Chat</Button></Link>
          <Link to={`/trades/${tradeId}/email`}><Button secondary card>Email</Button></Link>
        </FlexContainerHorizontal>
      </ContactDiv>
      <Switch>
        <Route
          exact path={`/trades/${tradeId}/chat`}
          render={(routeProps) => (
            <Chat {...routeProps} ownerName={ownerName} tradeId={tradeId} userId={userId} />
          )} />
        <Route path={`/trades/${tradeId}/email`}
          render={(routeProps) => (
            <Email {...routeProps} email={email} book_title={book_title} />
          )} />
      </Switch>
    </>
  );
}