import React from 'react';
import { Button, FlexContainerHorizontal } from './';
import styled from 'styled-components';

const Heading = styled.h2`
  margin-top: 0;
  font-size: 18px;
`

const Details = styled.p`
  margin: 0;
  font-size: 12px;
`

const CardContainer = styled.div`
  margin-bottom: 15px;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  transition: 0.2s ease-in-out;
  :hover {
    box-shadow: 0 0 5px 0px #0000004f;
  }
`

const DetailsContainer = styled.div`
  padding: 10px;
`

const Img = styled.img`
  height: 100%;
  width: 110px;
  margin-bottom: -3px;
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
              : <Button primary card onClick={() => clickHandler(book)}>Add book</Button>
          }
        </DetailsContainer>
      </FlexContainerHorizontal>
    </CardContainer>
  )
}
