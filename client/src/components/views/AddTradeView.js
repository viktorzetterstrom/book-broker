import React, { useState, useContext } from 'react';
import { Button, FlexContainerVertical, BookCard, Form, Label, BookSearch } from '../basic-components';
import UserContext from '../../contexts/UserContext';
import { Redirect } from 'react-router-dom';
import notifyService from '../../services/notify-service';

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
    })
      .then(() => {
        notifyService.tradeCreated(activeBook.bookTitle);
        setRedirect(true);
      });
  };

  return (
    redirect
      ? <Redirect to="/trades" />
      : <FlexContainerVertical>
        {activeBook
          ? (
            <>
              <Button onClick={() => setActiveBook(null)}>Back</Button>
              <BookCard hideButton book={activeBook} />
              <Form submitHandler={addTrade}>
                <Label>Description<textarea name='description'></textarea></Label>
                <Label>Condition
                  <select name='condition'>
                    <option>Used</option>
                    <option>Good</option>
                    <option>Pristine</option>
                  </select>
                </Label>
                <Button>Add Trade</Button>
              </Form>
            </>
          )
          : <BookSearch setActiveBook={setActiveBook} />}
      </FlexContainerVertical>
  )
}