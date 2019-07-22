import React, { useState, useContext } from 'react';
import { Button, FlexContainerVertical, BookCard, Form, Label, BookSearch, Header, HeaderText, HeaderTitle, ConditionSelect } from '../basic-components';
import UserContext from '../../contexts/UserContext';
import { Redirect } from 'react-router-dom';
import notifyService from '../../services/notify-service';
import { InputContainer, Textarea } from '../basic-components';

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
      : <>
        <Header>
          <HeaderTitle>Add book for trade</HeaderTitle>
          <HeaderText>Search for the book you want to trade</HeaderText>
        </Header>

        {
          activeBook
            ? (
              <>
                <BookCard hideButton book={activeBook} />
              <FlexContainerVertical>
                <Form submitHandler={addTrade}>
                  <InputContainer>
                    <Textarea name='description'></Textarea>
                    <Label>Description</Label>
                  </InputContainer>

                  <ConditionSelect />
                  <Button primary>Add Trade</Button>
                  <Button secondary onClick={() => setActiveBook(null)}>Back</Button>
                </Form>
              </FlexContainerVertical>
              </>
            )
            : <BookSearch setActiveBook={setActiveBook} />}

      </>
  )
}