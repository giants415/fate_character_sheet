import React from 'react';

const ConsequenceList = ({myConsequences}) => {
  return (
    <div className="col-sm-4">
      <h4>Consequences</h4>
      <p>Mild: {myConsequences.mild}</p>
      <p>Moderate: {myConsequences.moderate}</p>
      <p>Severe: {myConsequences.severe}</p>
    </div>
  )
};

export default ConsequenceList;
