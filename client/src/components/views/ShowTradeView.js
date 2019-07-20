import React, { useEffect, useState, useContext } from 'react';
import { FlexContainerVertical, TradeCard, Spinner, ContactForm, Button } from '../basic-components';
import UserContext from '../../contexts/UserContext';
import { Redirect, Link } from 'react-router-dom';


export function ShowTradeView({ match }) {
  const [trade, setTrade] = useState({ loading: true });
  const [redirect, setRedirect] = useState(false);
  const userContext = useContext(UserContext);


  const deleteTrade = () => fetch(`/api/trades/${match.params.id}`, { method: 'DELETE' })
    .then(() => setRedirect(true));

  const completeTrade = () => fetch(`/api/trades/${match.params.id}`, { method: 'PATCH' })
    .then(() => setRedirect(true));

  const TradeOptions = () => {
    return (
      <div>
        <Link to={`/trades/${match.params.id}/edit`}><Button>Edit</Button></Link>
        <Button onClick={deleteTrade}>Delete</Button>
        <Button onClick={completeTrade}>Complete</Button>
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
              {ownerUserAlternatives()}
            </>
        }
      </FlexContainerVertical>
  );
}