import React from 'react';

const ulStyle = {
  listStyleType: 'none',
  paddingLeft: '0px'
};

const liStyle = {
  display: 'inline',
  margin: '10px'
};

const FairSkills = ({fairSkills}) => {
  return (
    <div>
      <h4>Fair</h4>
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
