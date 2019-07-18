import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, FlexContainerHorizontal } from './index';
import UserContext from '../../contexts/UserContext';
import { SignOutButton } from '../authentication';

const StyledNav = styled.nav`
  background-color: hotpink;
  display: flex;
  justify-content: space-evenly;
  > a {
    width: 100%;
    text-align: center;
  }
`;

const StyledNavButton = styled.div`
  padding: 10px;
  background-color: darkgray;
  color: black;
  transition: 0.3s;
  :hover {
    background-color: lightgray;
  }
`;


export function NavBar() {
  const userContext = useContext(UserContext);

  return (
    <StyledNav>
      <Link to='/trades'><StyledNavButton>Trades</StyledNavButton></Link>
      <Link to='/trades/add'><StyledNavButton>Create Trade</StyledNavButton></Link>
      {
        userContext.user
          ? <SignOutButton />
          : <Link to='/login'><StyledNavButton>Log in</StyledNavButton></Link>
      }
    </StyledNav>
  );
}
