import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, FlexContainerVertical } from './index';

const StyledHeader = styled.header`
  background-color: lightgray;
  padding: 20px;
`

const StyledH1 = styled.h1`
  text-align: center;
  margin-bottom: 5px;
`

export function Header() {
  return (
    <StyledHeader>
      <FlexContainerVertical>
        <StyledH1>Bookbroker</StyledH1>
        <p>Yada yada yada, lodum fbdjfjhd jbdf</p>
        <Link to="/"><Button>Browse</Button></Link>
      </FlexContainerVertical>
    </StyledHeader>
  );
}
