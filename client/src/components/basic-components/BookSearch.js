import React, { useState } from 'react';
import queryString from 'query-string';
import { Login } from '../authentication';
import { Link } from 'react-router-dom';
import { Button, Header, FlexContainerVertical, BookCard, Form, Input, Label, Spinner } from '.';
import styled from 'styled-components';

const StyledLi = styled.li`
  list-style: none;
`

export function BookSearch({setActiveBook}) {
  const [books, setBooks] = useState(null);
  let timer;

  const displayQuery = query => {
    fetch('/api/books?' + query)
      .then(res => res.json())
      .then(data => setBooks(data));
  }

  const onChange = e => {
    const query = queryString.stringify({ q: e.target.value });
    clearTimeout(timer);
    timer = setTimeout(() => displayQuery(query), 1000);
  }


  return (
    <div>
      <Form onChange={onChange} submitHandler={displayQuery}>
        <Label>Search<Input type='text' name='query' /></Label>
      </Form>
      <ul>
        {books ? books.map((book, i) => (
          <StyledLi key={i}>
            <BookCard book={book} clickHandler={setActiveBook} />
          </StyledLi>
        )
        ) : <></>}
      </ul>
    </div>
  );
}

