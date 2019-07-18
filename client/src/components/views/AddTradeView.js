import React, { useState, useContext } from 'react';
import { Button, Header, FlexContainerVertical, BookCard, Form, Input, Label, Spinner } from '../basic-components';
import UserContext from '../../contexts/UserContext';
import styled from 'styled-components';

const AddTradeView = ({book={
  "workId": "1466917",
  "publicationYear": "1996",
  "averageRating": "4.45",
  "bookTitle": "A Game of Thrones (A Song of Ice and Fire, #1)",
  "authorName": "George R.R. Martin",
  "authorId": "346732",
  "bookImgUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1562726234l/13496._SY160_.jpg"
}}) => {
  const userContext = useContext(UserContext);

  const addTrade = e => {
    e.preventDefault();
    const description = e.target.description.value;
    const condition = e.target.condition.value;
    const id = userContext.user.id;
    const trade = {...book, description, condition, id};
    console.log(trade);


  }



  return (
    <FlexContainerVertical>
      <BookCard hideButton book={book}/>
      <Form submitHandler={addTrade}>
        <Label>Description<textarea name='description'></textarea></Label>
        <Label>Condition<Input name='condition' type='number' max='5' min='1' /></Label>
        <Button>Add Trade</Button>
      </Form>
    </FlexContainerVertical>
  )
}

export default AddTradeView;