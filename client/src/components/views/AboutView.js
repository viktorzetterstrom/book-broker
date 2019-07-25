import React from 'react';
import { Header, HeaderText, HeaderTitle } from '../basic-components';
import styled from 'styled-components';

const StyledLi = styled.li`
  display:flex;
  align-items: center;
  margin-bottom: 30px;
  margin-left: 10px;

  > i {
    margin-right: 10px;
  }
`;

const StyledUl = styled.ul`
  background-color: var(--gray-light);
  padding: 20px 10px;
  border-radius: 3px;
`;

const StyledContainer = styled.div`
  margin: 20px;
`;

export function AboutView() {


  return (
    <>
      <Header>
        <HeaderTitle>About Bookbroker</HeaderTitle>
        <HeaderText>Trade your old books for new ones</HeaderText>
      </Header>
      <StyledContainer>
        <StyledUl>
          <StyledLi><i className="material-icons md-36">library_add</i> Add your books on your profile.</StyledLi>
          <StyledLi><i className="material-icons md-36">search</i> Browse other peoples books.</StyledLi>
          <StyledLi><i className="material-icons md-36">comment</i> Send a email or a message if you are interested.</StyledLi>
          <StyledLi><i className="material-icons md-36">thumb_up</i> Setup a trade together.</StyledLi>
          <StyledLi><i className="material-icons md-36">repeat</i> Repeat as many times as you like, there's a lot of books to read!</StyledLi>
        </StyledUl>
      </StyledContainer>
    </>
  );
}