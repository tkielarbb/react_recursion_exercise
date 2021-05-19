import React, { Component } from 'react';
import RecursiveComponent from './RecursiveComponent';

const One = ({children, ...props}) => {
  return <div {...props}>{children}1</div>
}
const Two = ({children, ...props}) => {
  return <div {...props}>{children}2</div>
}
const Three = ({children, ...props}) => {
  return <div {...props}>{children}3</div>
}
const components = [One,Two,Three];

const Recursion = () => {
  return (
    <div className="App-wrapper">
      <RecursiveComponent components={components}/>
    </div>
  )
}
export default Recursion