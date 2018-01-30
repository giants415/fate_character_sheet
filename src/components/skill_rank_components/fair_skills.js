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

const FairSkills = ({fairSkills}) => {
  return (
    <div>
      <p style={pStyle}>Fair ( +2 )</p>
      <ul style={ulStyle}>
        <li style={liStyle}>{fairSkills[0]}</li>
        <li style={liStyle}>{fairSkills[1]}</li>
        <li style={liStyle}>{fairSkills[2]}</li>
        <li style={liStyle}>{fairSkills[3]}</li>
        <li style={liStyle}>{fairSkills[4]}</li>
      </ul>
    </div>
  );
}

export default FairSkills;
