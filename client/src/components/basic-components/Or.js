import React from 'react';
import styled from 'styled-components';

const StyledHr = styled.hr`
  display: inline-block;
  width: 90px;
  position: relative;
  top: 5px;
  border-top: none;
  border-color: rgba(0, 0, 0, 0.2);
`

const StyledDiv = styled.div`
  margin: 20px 0;
  color: rgba(0, 0, 0, 0.5);
`

export function Or() {
  return (
    <StyledDiv>
      <StyledHr /> or <StyledHr />
    </StyledDiv>
  );
}
