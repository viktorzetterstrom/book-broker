import React, { useEffect, useState, useContext } from 'react';
import { FlexContainerVertical, TradeCard, Spinner, Header, HeaderTitle, Button } from '../basic-components';
import UserContext from '../../contexts/UserContext';
import authService from '../../services/auth-service';
import notifyService from '../../services/notify-service';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export function ProfileView({ match }) {
  const [activeTrades, setActiveTrades] = useState({ loading: true });
  const [completedTrades, setCompletedTrades] = useState([]);
  const [pinned, setPinned] = useState([]);
  const [user, setUser] = useState({ username: '' });
  const userContext = useContext(UserContext);

  useEffect(() => {
    fetch(`/api/users/${match.params.id}/trades`)
      .then(result => result.json())
      .then(json => setTimeout(() => {
        setActiveTrades(
          json
            .filter(trade => trade.trade_status === false)
            .map((trade, i) => <TradeCard key={i} {...trade} loggedIn={userContext.user ? userContext.user.id : false} />)
        )
        setCompletedTrades(
          json
            .filter(trade => trade.trade_status === true)
            .map((trade, i) => <TradeCard key={i} {...trade} loggedIn={userContext.user ? userContext.user.id : false} />)
        )
      }, 800));
  }, [match.params.id, userContext.user]);

  useEffect(() => {
    fetch(`/api/users/${match.params.id}`)
      .then(result => result.json())
      .then(json => setUser(json));
  }, [match.params.id]);

  useEffect(() => {
    if (userContext.user) {
      fetch(`/api/users/${userContext.user.id}/pinned`)
        .then(result => result.json())
        .then(json => setPinned(json));
    }
  }, [userContext]);

  const StyledP = styled.p`
    background-color: var(--gray-light);
    padding: 20px;
    border-radius: 3px;
  `

  return (
    <>
      <Header>
        {
          userContext.user && userContext.user.username === user.username
            ? <>
              <HeaderTitle>Hello {user.username}</HeaderTitle>
              <Link to='/'><Button tertiary onClick={() => {
                authService.signout(() => {
                  notifyService.logoutSuccess();
                  userContext.setUser(null);
                });
              }}>Log out</Button>
              </Link>
            </>
            : <HeaderTitle>{user.username}</HeaderTitle>
        }
      </Header>
      {
        activeTrades.loading
          ? <Spinner />
          : <FlexContainerVertical>
            <h2>Active</h2>
            {
              activeTrades.length > 0
                ? activeTrades
                : <StyledP>There are no active trades</StyledP>
            }

            {
              userContext.user && user.id === userContext.user.id && completedTrades.length > 0
                ? <>
                  <h2>Completed</h2>
                  {
                    completedTrades
                  }
                </>
                : <></>
            }
            <h2>Pinned</h2>
            {
              pinned.length > 0
                ? <>
                  {
                    pinned
                      .map(trade => {
                        trade.pinned = true;
                        return trade;
                      })
                      .map((trade, i) => <TradeCard key={i} {...trade} loggedIn={userContext.user ? userContext.user.id : false} />)
                  }
                </>
                : <StyledP>There are no pinned trades</StyledP>
            }
          </FlexContainerVertical>
      }
    </>
  );
}