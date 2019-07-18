import React, { useState, useContext } from 'react';
import { Button, Header, FlexContainerVertical, BookCard, Form, Input, Label, Spinner, BookSearch } from '../basic-components';
import UserContext from '../../contexts/UserContext';
import styled from 'styled-components';

const AddTradeView = () => {
  const [activeBook, setActiveBook] = useState(null);
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
    }).then(console.log);
  }

  return (
    <FlexContainerVertical>
      {activeBook
        ? (
          <>
          <BookCard hideButton book={activeBook} />
          <Form submitHandler={addTrade}>
            <Label>Description<textarea name='description'></textarea></Label>
            <Label>Condition<Input name='condition' type='number' max='5' min='1' /></Label>
            <Button>Add Trade</Button>
          </Form>
          </>
        )
        : <BookSearch setActiveBook={setActiveBook} />}
    </FlexContainerVertical>
  )
}

export default AddTradeView;