import React, { useState } from 'react';
import queryString from 'query-string';
import {BookCard, Form, Input, Label, Spinner } from '.';
import styled from 'styled-components';

const StyledLi = styled.li`
  list-style: none;
`

export function BookSearch({setActiveBook}) {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(null);

  const displayQuery = query => {
    fetch('/api/books?' + query)
      .then(res => res.json())
      .then(data => setBooks(data));

  }

  const onChange = e => {
    setTimer(clearTimeout(timer));
    setBooks(null);
    setLoading(true);
    const query = queryString.stringify({ q: e.target.value });
    setTimer(setTimeout(() => {
      setLoading(false);
      displayQuery(query);
    }, 2000));
  }


  return (
    <div>
      <Form onChange={onChange} autoComplete="off">
        <Label>Search<Input autocomplete="off" type='text' name='query' /></Label>
      </Form>
      <ul>
        {books ? books.map((book, i) => (
          <StyledLi key={i}>
            <BookCard book={book} clickHandler={setActiveBook} />
          </StyledLi>
        )
        ) : <></>}
        {
          loading
            ? <Spinner />
            : <></>
        }
      </ul>
    </div>
  );
}

