import React from 'react';

const ulStyle = {
  listStyleType: 'none',
  paddingLeft: '0px'
};

const liStyle = {
  display: 'inline',
  margin: '10px'
};

const SuperbSkills = ({superbSkills}) => {
  return (
    <div>
      <h4>Superb</h4>
      <ul style={ulStyle}>
        <li style={liStyle}>{superbSkills[0]}</li>
        <li style={liStyle}>{superbSkills[1]}</li>
        <li style={liStyle}>{superbSkills[2]}</li>
        <li style={liStyle}>{superbSkills[3]}</li>
        <li style={liStyle}>{superbSkills[4]}</li>
      </ul>
    </div>
  );
}

export default SuperbSkills;
