import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: grey;
  color: white;
  border: 1px solid grey;
  border-radius: 3px;
  padding: 8px 12px;
  margin-top: 5px;
  width: 200px;
`

export function Button({ onClick, children }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}
