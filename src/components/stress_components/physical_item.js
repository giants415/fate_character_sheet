import React from 'react';

const PhysicalStressItems = ({physical}) => {
  return (
    <div>
      <p>Physical Stress</p>
      <div className='stress_box'>
        <p>{physical[0]}</p>
        <p>{physical[1]}</p>
      </div>
    </div>
  )
};

export default PhysicalStressItems;
