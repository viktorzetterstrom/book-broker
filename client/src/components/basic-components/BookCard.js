import React from 'react';
import { Button, FlexContainerHorizontal } from './';
import styled from 'styled-components';



export function BookCard({ book, onClick }) {
  return (<FlexContainerHorizontal>
    <div>
      <img src={book.bookImgUrl} alt="book" />
    </div>
    <div>
      <h3>{book.bookTitle}</h3>
      <p>By: {book.authorName}</p>
      <p>Published: {book.publicationYear}</p>
      <p>Rating: {book.averageRating}</p>
      <Button onClick={onClick}>Add book</Button>
    </div>
  </FlexContainerHorizontal>
  )
}
