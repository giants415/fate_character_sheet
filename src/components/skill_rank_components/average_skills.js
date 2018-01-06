import React from 'react';

const AverageSkills = ({AverageSkills}) => {
  return (
    <div>
      <h4>Average</h4>
      <p>{AverageSkills[0]}</p>
      <p>{AverageSkills[1]}</p>
      <p>{AverageSkills[2]}</p>
      <p>{AverageSkills[3]}</p>
      <p>{AverageSkills[4]}</p>
    </div>
  );
}

export default AverageSkills;
