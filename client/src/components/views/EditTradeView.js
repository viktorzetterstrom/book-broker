import React, { useState, useEffect } from 'react';
import { Button, FlexContainerVertical, TradeCard, Form, ConditionSelect, Label, Spinner, InputContainer, Textarea } from '../basic-components';
import { Redirect } from 'react-router-dom';
import notifyService from '../../services/notify-service';

export const EditTradeView = ({ match }) => {
  const [redirect, setRedirect] = useState(false);
  const [trade, setTrade] = useState(null);

  useEffect(() => {
    fetch(`/api/trades/${match.params.id}`)
      .then(result => result.json())
      .then(json => setTimeout(() => setTrade(json), 200));

  }, [match.params.id]);

  const editTrade = e => {
    e.preventDefault();
    const trade_description = e.target.description.value;
    const book_condition = e.target.condition.value;

    fetch(`/api/trades/${trade.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...trade, trade_description, book_condition })
    }).then(() => {
      notifyService.tradeUpdated(trade.book_title);
      setRedirect(true);
    });
  };

  return (
    redirect
      ? <Redirect to={`/trades/${match.params.id}`} />
      : <FlexContainerVertical>
        {trade
          ? (
            <>
              <TradeCard hideButton {...trade} />
              <Form submitHandler={editTrade}>
                <InputContainer>
                  <Textarea name='description' defaultValue={trade.trade_description}></Textarea>
                  <Label>Description</Label>
                </InputContainer>
                <ConditionSelect />
                <Button primary>Update Trade</Button>
              </Form>
            </>
          )
          : <Spinner />}
      </FlexContainerVertical>
  )
}