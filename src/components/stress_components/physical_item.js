import React from 'react';
import StressBox from './stress_box';

const PhysicalStressItems = ({physical}) => {
  return (
      <div className='stress_box'>
        <span>Physical Stress</span>
        <StressBox />
      </div>  
  )
};

export default PhysicalStressItems;
