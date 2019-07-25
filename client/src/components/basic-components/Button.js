import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: var(${ props => {
    if (props.primary) return '--primary-color';
    if (props.secondary) return '--secondary-color';
    if (props.tertiary) return '--tertiary-color';
  }});
  color: var(--gray-dark);
  border-radius: 3px;
  padding: 8px 12px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.315);
  border: none;
  margin-top: 5px;
  width: ${props => props.card ? 'auto' : '200px'};
  transition: 0.3s;
  outline: none;
  :hover {
    background-color: var(${ props => {
    if (props.primary) return '--primary-color-dark';
    if (props.secondary) return '--secondary-color-dark';
    if (props.tertiary) return '--tertiary-color-dark';
  }});
  color: var(${ props => {
    if (props.primary) return '--gray-light';
    if (props.secondary) return '--gray-light';
    if (props.tertiary) return '--gray-light';
  }});
    cursor: pointer;
  }
  :active {
    transform: scale(0.95);
  }
`

export function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>
}
