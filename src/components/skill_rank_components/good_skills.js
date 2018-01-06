import React from 'react';

const GoodSkills = ({goodSkills}) => {
  return (
    <div>
      <h4>Good</h4>
      <p>{goodSkills[0]}</p>
      <p>{goodSkills[1]}</p>
      <p>{goodSkills[2]}</p>
      <p>{goodSkills[3]}</p>
      <p>{goodSkills[4]}</p>
    </div>
  );
}

export default GoodSkills;
