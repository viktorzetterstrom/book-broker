import React, { useEffect, useState, useContext } from 'react';
import { FlexContainerVertical, TradeCard, Spinner, ContactForm, Button, Chat } from '../basic-components';
import UserContext from '../../contexts/UserContext';
import { Redirect, Link } from 'react-router-dom';
import notifyService from '../../services/notify-service';

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
      <div>
        <Link to={`/trades/${match.params.id}/edit`}><Button card primary>Edit</Button></Link>
        <Button card onClick={deleteTrade} tertiary>Delete</Button>
        <Button card onClick={completeTrade} secondary>Complete</Button>
      </div>
    );
  }

  useEffect(() => {
    fetch(`/api/trades/${match.params.id}`)
      .then(result => result.json())
      .then(json => setTimeout(() => setTrade(json), 200));
    return () => setTrade(null);
  }, [match.params.id]);

  const ownerUserAlternatives = () => userContext.user && userContext.user.id === trade.owner_id
    ? <TradeOptions />
    : <ContactForm {...trade} />;

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
              {userContext.user
                ? <Chat tradeId={match.params.id} ownerName={trade.username} userId={userContext.user.id} />
                : <></>}
            </>
        }
      </FlexContainerVertical>
  );
}