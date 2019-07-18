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

const ImgContainer = styled.div`
  width: 80px;
`

const Img = styled.img`
  width: 100%;
`

export function TradeCard({
  id,
  goodreads_book_id,
  goodreads_author_id,
  book_title,
  book_author,
  book_publication_year,
  book_rating,
  book_image,
  trade_description,
  book_condition,
  owner_id,
  onClick,
}) {

  return (
    <CardContainer>
      <FlexContainerHorizontal>
        <div>
          <Img src={book_image} alt="book" />
        </div>
        <DetailsContainer>
          <Heading>{book_title}</Heading>
          <Details>By: {book_author}</Details>
          <Details>Published: {book_publication_year}</Details>
          <Details>Condition: {book_condition}</Details>
          <Button card onClick={onClick}>View more</Button>
        </DetailsContainer>
      </FlexContainerHorizontal>
    </CardContainer>
  )
}
