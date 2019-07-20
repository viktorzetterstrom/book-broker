import React, { useEffect, useState } from 'react';
import { FlexContainerVertical, TradeCard, Spinner } from '../basic-components';

export function ShowTradesView() {
  const [ trades, setTrades ] = useState({ loading: true });

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
            .map((trade, i) => <TradeCard key={i} {...trade} />)
      }
    </FlexContainerVertical>
  );
}