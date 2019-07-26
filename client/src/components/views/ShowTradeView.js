import React, { useEffect, useState, useContext } from 'react';
import { FlexContainerVertical, TradeCard, Spinner, ContactForm, Button, Chat } from '../basic-components';
import UserContext from '../../contexts/UserContext';
import { Redirect, Link } from 'react-router-dom';
import notifyService from '../../services/notify-service';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 15px 0;
  margin-bottom: 10px;
  margin-top: -15px;
  background-color: var(--gray-light);
`


export function ShowTradeView({ match }) {
  const [trade, setTrade] = useState({ loading: true });
  const [redirect, setRedirect] = useState(false);
  const userContext = useContext(UserContext);


  const deleteTrade = () => fetch(`/api/trades/${match.params.id}`, { method: 'DELETE' })
    .then(() => {
      notifyService.tradeDeleted(trade.book_title);
      setRedirect(true)
    });

  const completeTrade = () => fetch(`/api/trades/${match.params.id}`, { method: 'PATCH' })
    .then(() => {
      notifyService.tradeCompleted(trade.book_title);
      setRedirect(true);
    });

  const TradeOptions = () => {
    return (
      <StyledDiv>
        <Link to={`/trades/${match.params.id}/edit`}><Button card primary>Edit</Button></Link>
        <Button card onClick={deleteTrade} tertiary>Delete</Button>
        <Button card onClick={completeTrade} secondary>Complete</Button>
      </StyledDiv>
    );
  }

  useEffect(() => {
    fetch(`/api/trades/${match.params.id}`)
      .then(result => result.json())
      .then(json => setTimeout(() => setTrade(json), 200));
    return () => setTrade(null);
  }, [match.params.id]);

  const ownerUserAlternatives = () => userContext.user && userContext.user.id === trade.owner_id
    ? <>
    <TradeOptions />
    <Chat tradeId={match.params.id} ownerName={trade.username} userId={userContext.user.id} />
    </>
    : userContext.user
      ? <ContactForm {...trade} tradeId={match.params.id} ownerName={trade.username} userId={userContext.user.id}/>
      : <></>;

  return (
    redirect
      ? <Redirect to="/trades" />
      : <FlexContainerVertical>
        {
          trade.loading ? <Spinner />
            : <>
              <TradeCard {...trade} hideButton />
              {!trade.trade_status
                ? ownerUserAlternatives()
                : <></>
              }
            </>
        }
      </FlexContainerVertical>
  );
}