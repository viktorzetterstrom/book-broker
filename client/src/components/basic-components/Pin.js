import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';



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
    <div>
      <label htmlFor={`pin-${tradeId}`}>Pin:</label>
      <input defaultChecked={isPinned} onChange={pinTrade} id={`pin-${tradeId}`} type="checkbox" />
    </div>
  )
}