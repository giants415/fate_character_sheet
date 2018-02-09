import React from 'react';

const ulStyle = {
  listStyleType: 'none',
  paddingLeft: '0px'
};

const liStyle = {
  display: 'inline',
  margin: '10px 10px 10px 0px'
};

const GreatSkills = ({greatSkills}) => {
  return (
    <div>
      <p>Great ( +4 )</p>
      <ul style={ulStyle}>
        <li style={liStyle}>{greatSkills[0]}</li>
        <li style={liStyle}>{greatSkills[1]}</li>
        <li style={liStyle}>{greatSkills[2]}</li>
        <li style={liStyle}>{greatSkills[3]}</li>
        <li style={liStyle}>{greatSkills[4]}</li>
      </ul>
    </div>
  );
}

export default GreatSkills;
