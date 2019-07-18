import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, FlexContainerHorizontal } from './index';
import UserContext from '../../contexts/UserContext';
import { SignOutButton } from '../authentication';


export function NavBar() {
  const userContext = useContext(UserContext);

  return (
    <nav>
      <Link to='/trades'>Trades</Link>
      <Link to='/trades/add'>Create Trade</Link>
      {
        userContext.user
          ? <SignOutButton/>
          : <Link to='/login'>Log in</Link>
      }
    </nav>
  );
}
