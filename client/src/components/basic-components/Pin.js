import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import { Star } from './Star';

const PinContainer = styled.div`
  position: absolute;
  top: 0;
  right: 30px;;
`


export const Pin = ({ tradeId, isPinned }) => {
  const { user } = useContext(UserContext);

  const pinTrade = (e) => {
    if (e.target.checked) {
      fetch(`/api/users/${user.id}/pinned`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tradeId })
      });
    } else {
      fetch(`/api/users/${user.id}/pinned`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tradeId })
      });
    }
  };

  return (
    <PinContainer>
      <Star defaultChecked={isPinned} onChange={pinTrade} id={`pin-${tradeId}`} type="checkbox" />
    </PinContainer>
  )
}