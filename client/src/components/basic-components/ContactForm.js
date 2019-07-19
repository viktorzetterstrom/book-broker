import React, { useState } from 'react';
import queryString from 'query-string';
import { Form } from './';

const createQueryString = (message, subject) => queryString.stringify({
  subject: subject,
  body: message,
});

export function ContactForm({ email, book_title }) {
  const [message, setMessage] = useState('');
  const [query, setQuery] = useState(createQueryString(message));

  const updateMessage = e => {
    setMessage(e.target.value)
    setQuery(createQueryString(message, book_title));
  };

  return (
    <Form submitHandler={e => e.preventDefault()} onChange={updateMessage}>
      <h3>Contact book owner</h3>
      <textarea name='message'></textarea>
      <a href={`mailto:${email}?${query}`}>Contact</a>
    </Form>
  );
}