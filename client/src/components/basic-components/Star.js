import React from 'react';
import './Star.css';

export const Star = (props) => {
  return <>
    <input {...props} className="pin" type="checkbox" title="bookmark page" />
    <label htmlFor={props.id}></label>
  </>
}