import React, { useEffect, useState, useContext } from 'react';
import { FlexContainerVertical, TradeCard, Spinner, Header, HeaderTitle } from '../basic-components';
import UserContext from '../../contexts/UserContext';

export function ProfileView({ match }) {
  const [trades, setTrades] = useState({ loading: true });
  const [user, setUser] = useState({ username: '' });
  const userContext = useContext(UserContext);

  useEffect(() => {
    fetch(`/api/users/${match.params.id}/trades`)
      .then(result => result.json())
      .then(json => setTimeout(() => setTrades(json), 800));
  }, [match.params.id]);

  useEffect(() => {
    fetch(`/api/users/${match.params.id}`)
      .then(result => result.json())
      .then(json => setUser(json));
  }, [match.params.id]);

  return (
    <>
      <Header>
        {
          userContext.user && userContext.user.username === user.username
            ? <HeaderTitle>Hello {user.username}</HeaderTitle>
            : <HeaderTitle>{user.username}</HeaderTitle>
        }
      </Header>
      {
        trades.loading
          ? <Spinner />
          : <FlexContainerVertical>
            <h2>Active</h2>
            {
              trades
                .filter(trade => trade.trade_status === false)
                .map((trade, i) => <TradeCard key={i} {...trade} />)
            }

            {
              userContext.user && user.id === userContext.user.id
                ? <>
                  <h2>Completed</h2>
                  {
                    trades
                      .filter(trade => trade.trade_status === true)
                      .map((trade, i) => <TradeCard key={i} {...trade} />)
                  }
                </>
                : <></>
            }
          </FlexContainerVertical>
      }
    </>
  );
}