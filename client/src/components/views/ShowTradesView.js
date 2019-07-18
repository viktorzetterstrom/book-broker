import React, { useEffect, useState } from 'react';
import { FlexContainerVertical, TradeCard, Spinner } from '../basic-components';

export default function ShowTradesView() {
  const [ trades, setTrades ] = useState({ loading: true });

  useEffect(() => {
    fetch('/api/trades')
      .then(result => result.json())
      .then(json => setTimeout(() => setTrades(json), 2000));
  }, []);

  return (
    <FlexContainerVertical>
      {
        trades.loading ? <Spinner />
          : trades.map((trade, i) => <TradeCard key={i} {...trade} />)
      }
    </FlexContainerVertical>
  );
}