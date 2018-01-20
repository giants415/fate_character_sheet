import React from 'react';

const ConsequenceList = ({myConsequences}) => {
  return (
    <div>
      <h4>Consequences</h4>
      <p>Mild: {myConsequences.mild}</p>
      <p>Moderate: {myConsequences.moderate}</p>
      <p>Severe: {myConsequences.severe}</p>
    </div>
  )
};

export default ConsequenceList;
