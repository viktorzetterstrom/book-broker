import React from 'react';
import { Button, FlexContainerHorizontal } from './';
import styled from 'styled-components';

const Heading = styled.h3`
  margin-top: 0;
  font-size: 14px;
`

const Details = styled.p`
  margin: 0;
  font-size: 12px;
`

const CardContainer = styled.div`
  padding: 10px;
  margin-top: 20px;
`

const DetailsContainer = styled.div`
  width: 75%;
  padding: 10px;
`

const Img = styled.img`
  width: 100%;
`

export function BookCard({ hideButton, book, clickHandler }) {
  return (
    <CardContainer>
      <FlexContainerHorizontal>
        <div>
          <Img src={book.bookImgUrl} alt="book" />
        </div>
        <DetailsContainer>
          <Heading>{book.bookTitle}</Heading>
          <Details>By: {book.authorName}</Details>
          <Details>Published: {book.publicationYear}</Details>
          {
            hideButton
              ? <></>
              : <Button card onClick={() => clickHandler(book)}>Add book</Button>
          }
        </DetailsContainer>
      </FlexContainerHorizontal>
    </CardContainer>
  )
}
