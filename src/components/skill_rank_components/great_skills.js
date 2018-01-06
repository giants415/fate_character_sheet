import React from 'react';

const GreatSkills = ({greatSkills}) => {
  return (
    <div>
      <h4>Great</h4>
      <p>{greatSkills[0]}</p>
      <p>{greatSkills[1]}</p>
      <p>{greatSkills[2]}</p>
      <p>{greatSkills[3]}</p>
      <p>{greatSkills[4]}</p>
    </div>
  );
}

export default GreatSkills;
