import React from 'react';

const AverageSkills = ({AverageSkills}) => {
  return (
    <div>
      <p>Average ( +1 )</p>
      <ul>
        <li>{AverageSkills[0]}</li>
        <li>{AverageSkills[1]}</li>
        <li>{AverageSkills[2]}</li>
        <li>{AverageSkills[3]}</li>
        <li>{AverageSkills[4]}</li>
      </ul>
    </div>
  );
}

export default AverageSkills;
