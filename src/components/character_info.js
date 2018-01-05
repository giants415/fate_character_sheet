import React, { Component } from 'react';

const CharacterInfo = ({myChar}) => {
  return (
    <div>
      <h1>Name: {myChar.name}</h1>
      <h4>Description: {myChar.description}</h4>
      <h4>Refresh: {myChar.refresh}</h4>
    </div>
  )
};

export default CharacterInfo;
