import React from 'react';

const pStyle = {
  margin: '0px'
};

const ConsequenceList = ({myConsequences}) => {
  return (
    <div className="col-sm-4">
      <p style={pStyle}>Consequences</p>
      <p>Mild: {myConsequences.mild}</p>
      <p>Moderate: {myConsequences.moderate}</p>
      <p>Severe: {myConsequences.severe}</p>
    </div>
  )
};

export default ConsequenceList;
