import React from 'react';

const ulStyle = {
  listStyleType: 'none',
  paddingLeft: '0px'
};

const liStyle = {
  display: 'inline',
  margin: '10px 10px 10px 0px'
};

const GoodSkills = ({goodSkills}) => {
  return (
    <div>
      <p>Good ( +3 )</p>
      <ul style={ulStyle}>
        <li style={liStyle}>{goodSkills[0]}</li>
        <li style={liStyle}>{goodSkills[1]}</li>
        <li style={liStyle}>{goodSkills[2]}</li>
        <li style={liStyle}>{goodSkills[3]}</li>
        <li style={liStyle}>{goodSkills[4]}</li>
      </ul>
    </div>
  );
}

export default GoodSkills;
