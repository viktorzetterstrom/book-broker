import React, { useEffect, useState, useContext } from 'react';
import { FlexContainerVertical, TradeCard, Spinner, Header, HeaderText, HeaderTitle } from '../basic-components';
import UserContext from '../../contexts/UserContext';

export function ShowTradesView() {
  const [trades, setTrades] = useState({ loading: true });
  const userContext = useContext(UserContext);

  useEffect(() => {
    fetch('/api/trades')
      .then(result => result.json())
      .then(json => setTimeout(() => setTrades(json), 800));
  }, []);

  return (
    <>
      <Header>
        <HeaderTitle>Trades</HeaderTitle>
        <HeaderText>Find your next book here!</HeaderText>
      </Header>

      {
        trades.loading ? <Spinner />
          : <FlexContainerVertical>
            {
              trades
                .filter(trade => trade.trade_status === false)
                .filter(trade => userContext.user ? trade.owner_id !== userContext.user.id : true)
                .map((trade, i) => <TradeCard key={i} {...trade} />)
            }
          </FlexContainerVertical>
      }

    </>
  );
}