import React from 'react';

const ConsequenceList = ({myConsequences}) => {
  return (
    <div className="col-lg-6">
      <h3>Consequences</h3>
      <p>Mild: {myConsequences.mild}</p>
      <p>Moderate: {myConsequences.moderate}</p>
      <p>Severe: {myConsequences.severe}</p>
    </div>
  )
};

export default ConsequenceList;
