import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
display: flex;
flex-direction: column;
`

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`

export const Label = styled.label`
  font-size: 12px;
  color: hotpink;
`

export default function Form({ submitHandler, children }) {
  return (
    <StyledForm onSubmit={submitHandler}>
      {children}
    </StyledForm>
  )
}