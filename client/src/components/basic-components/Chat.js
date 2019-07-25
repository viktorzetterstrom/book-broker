import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Messages } from './Messages';
import { Form, Input, InputContainer, Label, Button } from './';
import { FlexContainerHorizontal } from './FlexContainerHorizontal';

const socket = io();

export const Chat = ({ tradeId, ownerName, userId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(`/api/trades/${tradeId}/messages`)
      .then(res => res.json())
      .then(setMessages);
  }, [tradeId]);

  useEffect(() => {
    socket.on(tradeId, function (msg) {
      setMessages([msg, ...messages]);
    });
  }, [messages, tradeId])

  const saveChat = (e) => {
    e.preventDefault();
    let message = e.target.chat.value;
    socket.emit('chat message', { message, userId, tradeId });
    e.target.chat.value = '';
    return false;
  }

  return (
    <>
      <Form submitHandler={saveChat}>
        <h3>Trade Chat</h3>
        <FlexContainerHorizontal baseline>
          <InputContainer>
            <Input required type="text" name="chat" />
            <Label>Chat</Label>
          </InputContainer>
          <Button card primary>Post</Button>
        </FlexContainerHorizontal>
      </Form>
      <Messages ownerName={ownerName} messages={messages} />
    </>
  )
};