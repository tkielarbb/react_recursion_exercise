import React, { Component } from 'react';
import RecursiveComponent from './RecursiveComponent';

const One = ({children}) => {
  return <div>{children}1</div>
}
const Two = ({children}) => {
  return <div>{children}2</div>
}
const Three = ({children}) => {
  return <div>{children}3</div>
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