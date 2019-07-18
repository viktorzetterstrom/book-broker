import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: grey;
  color: white;
  border: 1px solid grey;
  border-radius: 3px;
  padding: 8px 12px;
  margin-top: 5px;
  width: ${props => props.card ? 'auto' : '200px'};
  transition: 0.3s;
  :hover {
    background-color: white;
    color: grey;
  }
  :active {
    transform: scale(0.95);
  }
`

export function Button(props) {
  return <StyledButton {...props} onClick={props.onClick}>{props.children}</StyledButton>
}
