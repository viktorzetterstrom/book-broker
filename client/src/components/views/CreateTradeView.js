import React, { useState } from 'react';
import queryString from 'query-string';
import { Login } from '../authentication';
import { Link } from 'react-router-dom';
import { Button, Header, FlexContainerVertical, BookCard, Form, Input, Label, Spinner } from '../basic-components';
import styled from 'styled-components';

const StyledLi = styled.li`
  list-style: none;
`

export default function CreateTradeView() {
  const [books, setBooks] = useState(null);
  const displayQuery = e => {
    e.preventDefault();
    const query = queryString.stringify({ q: e.target.query.value });

    fetch('/api/books?' + query)
      .then(res => res.json())
      .then(data => setBooks(data));
  }

  return (
    <div>
      <Form submitHandler={displayQuery}>
        <Label>Search<Input type='text' name='query' /></Label>
        <Button>Search</Button>
      </Form>
      <ul>
        {books ? books.map((book, i) => (
          <StyledLi key={i}>
            <BookCard book={book} />
          </StyledLi>
        )
        ) : <Spinner/>}
      </ul>
    </div>
  );
}

