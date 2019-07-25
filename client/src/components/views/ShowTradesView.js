import React, { useEffect, useState, useContext } from 'react';
import { FlexContainerVertical, TradeCard, Spinner, Header, HeaderText, HeaderTitle } from '../basic-components';
import UserContext from '../../contexts/UserContext';

export function ShowTradesView() {
  const [trades, setTrades] = useState({ loading: true });
  const [pinned, setPinned] = useState({loading: true});
  const userContext = useContext(UserContext);

  useEffect(() => {
    fetch('/api/trades')
      .then(result => result.json())
      .then(json => setTimeout(() => setTrades(json), 800));
  }, []);

  useEffect(() => {
    if (userContext.user) {
      fetch(`/api/users/${userContext.user.id}/pinned`)
        .then(result => result.json())
        .then(json => setPinned(json));
    }
  }, [userContext]);

  return (
    <>
      <Header>
        <HeaderTitle>Trades</HeaderTitle>
        <HeaderText>Find your next book here!</HeaderText>
      </Header>

      {
        trades.loading
          ? <Spinner />
          : <FlexContainerVertical>
            {
              trades
                .filter(trade => trade.trade_status === false)
                .filter(trade => userContext.user ? trade.owner_id !== userContext.user.id : true)
                .map(trade => {
                  if (userContext.user && !pinned.loading && pinned.find((pin) => pin.id === trade.id)) {
                    trade.pinned = true;
                  } else trade.pinned = false;
                  return trade;
                })
                .map((trade, i) => <TradeCard key={i} {...trade} loggedIn={userContext.user ? userContext.user.id : null}/>)
            }
          </FlexContainerVertical>
      }

    </>
  );
}