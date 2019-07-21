import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import authService from '../../services/auth-service';
import notifyService from '../../services/notify-service';

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
  cursor: pointer;
  :hover {
    background-color: lightgray;
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
