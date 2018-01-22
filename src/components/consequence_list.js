import React from 'react';

const noGutters = {
    paddingRight: '0',
    paddingLeft: '0'
};

const ConsequenceList = ({myConsequences}) => {
  return (
    <div className="col-sm-4" style={noGutters}>
      <h4>Consequences</h4>
      <p>Mild: {myConsequences.mild}</p>
      <p>Moderate: {myConsequences.moderate}</p>
      <p>Severe: {myConsequences.severe}</p>
    </div>
  )
};

export default ConsequenceList;
