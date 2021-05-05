import React, { Component, useState } from "react";

const RecursiveComponent = ({ components }) => {
  const recursiveDivs = (index) => {
    const Component = components[index]
    if (Component) {
      return (
        <Component children={recursiveDivs( index + 1)} />
      );
    }
  };

  return <div>{recursiveDivs(0)}</div>;
};

export default RecursiveComponent;
