import React from 'react';

const PhysicalStressItems = ({physical}) => {
  return (
      <div className='stress_box'>
        <h6>Physical Stress</h6>
        <p>{physical[0]}</p>
        <p>{physical[1]}</p>
      </div>  
  )
};

export default PhysicalStressItems;
