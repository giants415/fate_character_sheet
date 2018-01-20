import React from 'react';

const ulStyle = {
  listStyleType: 'none',
  paddingLeft: '0px'
};

const liStyle = {
  display: 'inline',
  margin: '10px'
};

const AverageSkills = ({AverageSkills}) => {
  return (
    <div>
      <h4>Average</h4>
      <ul style={ulStyle}>
        <li style={liStyle}>{AverageSkills[0]}</li>
        <li style={liStyle}>{AverageSkills[1]}</li>
        <li style={liStyle}>{AverageSkills[2]}</li>
        <li style={liStyle}>{AverageSkills[3]}</li>
        <li style={liStyle}>{AverageSkills[4]}</li>
      </ul>
    </div>
  );
}

export default AverageSkills;
