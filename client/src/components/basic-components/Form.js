import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items:center;
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

export function Form({ onChange, submitHandler, children }) {
  return (
    <StyledForm onChange={onChange} onSubmit={submitHandler}>
      {children}
    </StyledForm>
  )
}