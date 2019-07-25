import React from 'react';
import styled from 'styled-components';
import { FlexContainerVertical } from './index';
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

export const HeaderTitle = styled.h1`
  font-size: 40px;
  text-align: center;
  color: var(--gray-dark);
  margin-bottom: 5px;
`

export const HeaderText = styled.p`
  text-align: center;
  color: var(--gray-dark);
`

export function Header({ children }) {
  return (
    <StyledHeader>
      <FlexContainerVertical>
        {children}
      </FlexContainerVertical>
    </StyledHeader>
  );
}
