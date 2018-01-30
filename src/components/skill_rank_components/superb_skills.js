import React from 'react';

const ulStyle = {
  listStyleType: 'none',
  paddingLeft: '0px'
};

const liStyle = {
  display: 'inline',
  margin: '10px 10px 10px 0px'
};

const pStyle = {
  margin: '0px'
};

const SuperbSkills = ({superbSkills}) => {
  return (
    <div>
      <p style={pStyle}>Superb ( +5 )</p>
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
