import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: white;
  color: green;
  border: 3px solid green;
  border-radius: 3px;
`

export default function Button({ onClick, children }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}
