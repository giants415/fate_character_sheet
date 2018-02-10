import React from 'react';

const GreatSkills = ({greatSkills}) => {
  return (
    <div>
      <p>Great ( +4 )</p>
      <ul>
        <li>{greatSkills[0]}</li>
        <li>{greatSkills[1]}</li>
        <li>{greatSkills[2]}</li>
        <li>{greatSkills[3]}</li>
        <li>{greatSkills[4]}</li>
      </ul>
    </div>
  );
}

export default GreatSkills;
