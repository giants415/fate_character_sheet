import React, { Component } from 'react';

import Name from './name';

const CharacterInfo = (props) => {
  return (
    <div>
      <h1>Name: {props.myChar.name}</h1>
      <h4>Description: {props.myChar.description}</h4>
      <h4>Refresh: {props.myChar.refresh}</h4>
    </div>
  )
};

export default CharacterInfo;
