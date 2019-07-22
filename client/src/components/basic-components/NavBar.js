import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import authService from '../../services/auth-service';
import notifyService from '../../services/notify-service';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  > a {
    width: 100%;
    text-align: center;
  };
  > a div {
    border-right: 2px solid #2ae3a252;
  };
  > a:last-child div {
    border-right: none;
  };
  box-shadow: 0 0 4px #000000ba;
`;

const StyledNavButton = styled.div`
  padding: 10px;
  background-color: var(--primary-color);
  color: var(--gray-dark);
  transition: 0.3s;
  cursor: pointer;
  :hover {
    background-color: var(--primary-color-dark);
  }
`;


export function NavBar() {
  const userContext = useContext(UserContext);

  return (
    <StyledNav>
      <Link to='/trades'><StyledNavButton>Trades</StyledNavButton></Link>
      {
        userContext.user
          ? <>
              <Link to='/trades/add'><StyledNavButton>Create</StyledNavButton></Link>
              <Link to={`/profiles/${userContext.user.id}`}><StyledNavButton>Profile</StyledNavButton></Link>
              <Link to='/'><StyledNavButton onClick={() => {
                authService.signout(() => {
                  notifyService.logoutSuccess();
                  userContext.setUser(null);
                });
              }}>Log out</StyledNavButton>
              </Link>
            </>
          : <Link to='/login'><StyledNavButton>Log in</StyledNavButton></Link>
      }
    </StyledNav>
  );
}
