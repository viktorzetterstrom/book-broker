import React, { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import { Star } from './Star';
import notifyService from '../../services/notify-service';

const PinContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 10px;
`


export const Pin = ({ title, tradeId, isPinned }) => {
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
      notifyService.pinAdded(title);
    } else {
      fetch(`/api/users/${user.id}/pinned`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tradeId })
      });
      notifyService.pinRemoved(title);
    }
  };

  return (
    <PinContainer>
      <Star defaultChecked={isPinned} onChange={pinTrade} id={`pin-${tradeId}`} type="checkbox" />
    </PinContainer>
  )
}