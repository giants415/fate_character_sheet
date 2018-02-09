import React from 'react';

const ConsequenceList = ({myConsequences}) => {
  return (
    <div className="col-sm-4">
      <p>Consequences</p>
      <p>Mild: {myConsequences.mild}</p>
      <p>Moderate: {myConsequences.moderate}</p>
      <p>Severe: {myConsequences.severe}</p>
    </div>
  )
};

export default ConsequenceList;
