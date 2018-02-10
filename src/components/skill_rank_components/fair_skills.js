import React from 'react';

const FairSkills = ({fairSkills}) => {
  return (
    <div>
      <p>Fair ( +2 )</p>
      <ul>
        <li>{fairSkills[0]}</li>
        <li>{fairSkills[1]}</li>
        <li>{fairSkills[2]}</li>
        <li>{fairSkills[3]}</li>
        <li>{fairSkills[4]}</li>
      </ul>
    </div>
  );
}

export default FairSkills;
