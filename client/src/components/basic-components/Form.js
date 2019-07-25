import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignRight ? 'flex-end' : 'center'};
  button {
    margin-top: 20px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  margin-top: 8px;
`;

export const Input = styled.input`
  width: 200px;
  font-size: 18px;
  height: 23px;
  padding: 0.5em;
  margin: 0.5em;
  background: var(--gray-light);
  border: 1px solid lightgrey;
  border-radius: 3px;
  :focus {
    outline-color: var(--secondary-color);
  }
  :focus + label {
    background-color: var(--secondary-color);
  }
`

export const Textarea = styled.textarea`
  resize: none;
  width: 300px;
  font-size: 12px;
  padding: 1em;
  border-radius: 3px;
  margin: 0.5em;
  background: var(--gray-light);
  border: 1px solid lightgrey;
  :focus {
    outline-color: var(--secondary-color);
  }
  :focus + label {
    background-color: var(--secondary-color);
  }
`

export const Label = styled.label`
  background: var(--gray-light);
  color: var(--gray-dark);
  position: absolute;
  left: 13px;
  top: -7px;
  padding: 2px 8px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  font-size: 12px;
  transition: 0.3s;
`

export function Form(props) {
  return (
    <StyledForm autoComplete="off" {...props} onSubmit={props.submitHandler}>
      {props.children}
    </StyledForm>
  )
}

const SelectLabel = styled.label`
  font-size: 12px;
  margin-right: 10px;
`

const StyledSelect = styled.select`
  font-size: 12px;

  :focus {
    outline-color: var(--secondary-color);
  }
`

export function ConditionSelect() {
  return <div>
    <SelectLabel>Condition:</SelectLabel>
    <StyledSelect defaultValue="Good" name="condition">
      <option>Used</option>
      <option>Good</option>
      <option>Pristine</option>
    </StyledSelect>
  </div>
}

