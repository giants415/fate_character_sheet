import React from 'react';

import '../../style/character_style.sass';

const CharacterInfo = ({myChar}) => {
  return (
    <div>
      <h1 className='name'>Name: {myChar.name}</h1>
      <h4>Description: {myChar.description}</h4>
      <h4>Refresh: {myChar.refresh}</h4>
    </div>
  )
};

export default CharacterInfo;
