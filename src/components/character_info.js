import React from 'react';

const CharacterInfo = ({myChar}) => {
  return (
    <div>
      <div className="col-sm-8">
        <h1 className="col-6">Name: {myChar.name}</h1>
        <h4 className="col-6">Description: {myChar.description}</h4>
      </div>
      <div className="col-lg-4">
        <h4>Refresh: {myChar.refresh}</h4>
      </div>
    </div>
  )
};

export default CharacterInfo;
