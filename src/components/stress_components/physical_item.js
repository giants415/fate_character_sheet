import React from 'react';

const PhysicalStressItems = ({physical}) => {
  return (
    <div>
      <p>Physical Stress</p>
      {physical[0]}
      {physical[1]}
    </div>
  )
};

export default PhysicalStressItems;
