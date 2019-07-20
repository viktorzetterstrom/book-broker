import React, { useState, useContext } from 'react';
import { Button, FlexContainerVertical, BookCard, Form, Input, Label, BookSearch } from '../basic-components';
import UserContext from '../../contexts/UserContext';
import { Redirect } from 'react-router-dom';

export const AddTradeView = () => {
  const [activeBook, setActiveBook] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const userContext = useContext(UserContext);

  const addTrade = e => {
    e.preventDefault();
    const description = e.target.description.value;
    const condition = e.target.condition.value;
    const id = userContext.user.id;
    const trade = { ...activeBook, description, condition, id };
    fetch('/api/trades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trade)
    }).then(() => setRedirect(true));
  };

  return (
    redirect
      ? <Redirect to="/trades" />
      : <FlexContainerVertical>
        <BookSearch setActiveBook={setActiveBook} />
        {activeBook
          ? (
            <>
              <Button onClick={() => setActiveBook(null)}>Back</Button>
              <BookCard hideButton book={activeBook} />
              <Form submitHandler={addTrade}>
                <Label>Description<textarea name='description'></textarea></Label>
                <Label>Condition<Input name='condition' type='number' max='5' min='1' /></Label>
                <Button>Add Trade</Button>
              </Form>
            </>
          )
          : <></>}
      </FlexContainerVertical>
  )
}