import styled from 'styled-components';

export const FlexContainerHorizontal = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${props => props.evenly ? 'space-evenly' : 'flex-start'};
  align-items: ${props => props.baseline ? 'baseline' : 'center'};
`