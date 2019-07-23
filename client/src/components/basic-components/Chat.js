import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Messages } from './Messages';
import { Form, Input, InputContainer, Label, Button } from './';

const socket = io();

export const Chat = ({tradeId, ownerName, userId}) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(`/api/trades/${tradeId}/messages`)
      .then(res => res.json())
      .then(setMessages);
  }, []);

  useEffect(() => {
    socket.on(tradeId, function (msg) {
      setMessages([msg, ...messages]);
    });
  }, [messages])

  const saveChat = (e) => {
    e.preventDefault();
    let message = e.target.chat.value;
    socket.emit('chat message', {message, userId, tradeId});
    e.target.chat.value = '';
    return false;
  }

  return (
    <>
      <Form submitHandler={saveChat}>
        <InputContainer>
          <Input required type="text" name="chat" />
          <Label>Chat</Label>
        </InputContainer>
        <Button primary>Post</Button>
      </Form>
      <Messages ownerName={ownerName} messages={messages}/>
    </>
  )
};