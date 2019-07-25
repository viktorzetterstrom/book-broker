import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { Form, Button, InputContainer, Textarea, Label } from './';


const createQueryString = (message, subject) => queryString.stringify({
  subject: subject,
  body: message,
});


export const Email = ({email, book_title}) => {
  const [message, setMessage] = useState('');
  const [query, setQuery] = useState(createQueryString(message, book_title));

  const updateMessage = e => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    setQuery(createQueryString(message, book_title));
  }, [message, book_title]);

  return (
    <Form action={`mailto:${email}?${query}`} method='post' enctype="text/plain" onChange={updateMessage}>
      <h3>Email book owner</h3>
      <InputContainer>
        <Textarea></Textarea>
        <Label>Message</Label>
      </InputContainer>
      <Button primary>Contact</Button>
    </Form>
  );
}