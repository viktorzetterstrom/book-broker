import React from 'react';
import './Spinner.css';
import styled, { keyframes } from 'styled-components';

// const Container = styled.div`
//   position: absolute;
//   width: 50px;
//   height: 50px;
//   border: 15px solid rgba(0, 0, 0, 0);
//   border-left: 15px solid hotpink;
//   border-radius: 50%;
// `

// const spin = keyframes`
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// `

// const SpinnerPart = styled.div`
//   animation: ${props => {
//     if (props.slow) return `${spin} 3s linear infinite`;
//     if (props.medium) return `${spin} 1.5s linear infinite`;
//     if (props.fast) return `${spin} 1s ease infinite`;
//   }}
// `

export function Spinner() {
  return (
    <div class="spinner-container">
      <div class="spinner spinner-slow"></div>
      <div class="spinner spinner-medium"></div>
      <div class="spinner spinner-fast"></div>
    </div>
  )
}
