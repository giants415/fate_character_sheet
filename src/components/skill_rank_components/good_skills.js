import React from 'react';

const GoodSkills = ({goodSkills}) => {
  return (
    <div>
      <p>Good ( +3 )</p>
      <ul>
        <li>{goodSkills[0]}</li>
        <li>{goodSkills[1]}</li>
        <li>{goodSkills[2]}</li>
        <li>{goodSkills[3]}</li>
        <li>{goodSkills[4]}</li>
      </ul>
    </div>
  );
}

export default GoodSkills;
