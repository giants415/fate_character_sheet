import React from 'react';

const PhysicalStressItems = ({physical}) => {
  return (
      <div className='stress_box'>
        <span>Physical Stress</span>
        <div>{physical[0]}</div>
        <div>{physical[1]}</div>
      </div>  
  )
};

export default PhysicalStressItems;
