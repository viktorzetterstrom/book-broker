import React, { useEffect, useState } from 'react';
import { FlexContainerVertical, TradeCard, Spinner, ContactForm } from '../basic-components';

export default function ShowTradeView({ match }) {
  const [ trade, setTrade ] = useState({ loading: true });

  useEffect(() => {
    fetch(`/api/trades/${match.params.id}`)
      .then(result => result.json())
      .then(json => setTimeout(() => setTrade(json), 200));
  }, [match.params.id]);

  return (
    <FlexContainerVertical>
      {
        trade.loading ? <Spinner />
          : <>
            <TradeCard {...trade} />
            <ContactForm {...trade} />
          </>
      }

    </FlexContainerVertical>
  );
}