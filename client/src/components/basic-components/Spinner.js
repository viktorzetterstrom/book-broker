import React from 'react';
import './Spinner.css';

export function Spinner() {
  return (
    <div className="spinner-container">
      <div className="spinner spinner-slow"></div>
      <div className="spinner spinner-medium"></div>
      <div className="spinner spinner-fast"></div>
    </div>
  )
}
