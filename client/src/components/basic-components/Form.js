import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignRight ? 'flex-end' : 'center'};
`

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: lightgrey;
  border: none;
  border-radius: 3px;
`

export const Label = styled.label`
  font-size: 12px;
`

export function Form(props) {
  return (
    <StyledForm autoComplete="off" {...props} onSubmit={props.submitHandler}>
      {props.children}
    </StyledForm>
  )
}