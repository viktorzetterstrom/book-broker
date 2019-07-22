import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, FlexContainerVertical } from './index';
import headerImage from '../../images/header.jpg';

const StyledHeader = styled.header`
  background-image: linear-gradient(to bottom,rgba(255, 255, 255, 0.81),rgba(239, 239, 239, 0.6)),
  url(${headerImage});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
  padding: 40px 20px;
  box-shadow: 0 0 10px black;
  `

const StyledH1 = styled.h1`
  font-size: 40px;
  text-align: center;
  color: var(--gray-dark);
  margin-bottom: 5px;
`

const StyledP = styled.p`
  text-align: center;
  color: var(--gray-dark);
`

export function Header() {
  return (
    <StyledHeader>
      <FlexContainerVertical>
        <StyledH1>Bookbroker</StyledH1>
        <StyledP>BookBroker is an app for trading your old books for new ones.</StyledP>
        <Link to="/trades"><Button primary>Browse</Button></Link>
      </FlexContainerVertical>
    </StyledHeader>
  );
}
