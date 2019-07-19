import React, { useState, useEffect, useContext } from 'react';
import queryString from 'query-string';
import { Form, Button } from './';
import UserContext from '../../contexts/UserContext';

const createQueryString = (message, subject) => queryString.stringify({
  subject: subject,
  body: message,
});

export function ContactForm({ email, book_title }) {
  const [message, setMessage] = useState('');
  const [query, setQuery] = useState(createQueryString(message, book_title));
  const userContext = useContext(UserContext);

  useEffect(() => {
    setQuery(createQueryString(message, book_title));
  }, [message, book_title])

  const updateMessage = e => {
    setMessage(e.target.value)
  };

  return userContext.user
    ? <Form action={`mailto:${email}?${query}`} method='post' enctype="text/plain" onChange={updateMessage}>
      <h3>Contact book owner</h3>
      <textarea></textarea>
      <Button>Contact</Button>
    </Form>
    : <></>;
}