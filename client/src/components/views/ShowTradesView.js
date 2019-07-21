import React, { useEffect, useState, useContext } from 'react';
import { FlexContainerVertical, TradeCard, Spinner } from '../basic-components';
import UserContext from '../../contexts/UserContext';

export function ShowTradesView() {
  const [ trades, setTrades ] = useState({ loading: true });
  const userContext = useContext(UserContext);

  useEffect(() => {
    fetch('/api/trades')
      .then(result => result.json())
      .then(json => setTimeout(() => setTrades(json), 800));
  }, []);

  return (
    <FlexContainerVertical>
      {
        trades.loading ? <Spinner />
          : trades
            .filter(trade => trade.trade_status === false)
            .filter(trade => userContext.user ? trade.owner_id !== userContext.user.id : true)
            .map((trade, i) => <TradeCard key={i} {...trade} />)
      }
    </FlexContainerVertical>
  );
}