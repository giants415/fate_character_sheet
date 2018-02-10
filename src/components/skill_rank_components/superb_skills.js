import React from 'react';

const SuperbSkills = ({superbSkills}) => {
  return (
    <div>
      <p>Superb ( +5 )</p>
      <ul>
        <li>{superbSkills[0]}</li>
        <li>{superbSkills[1]}</li>
        <li>{superbSkills[2]}</li>
        <li>{superbSkills[3]}</li>
        <li>{superbSkills[4]}</li>
      </ul>
    </div>
  );
}

export default SuperbSkills;
