import React from 'react';
import StressBoxList from '../stress_box_list';

const PhysicalStressItems = ({physical}) => {
  return (
      <div className='stress_box'>
        <span>Physical Stress</span>
        <StressBoxList />
      </div>  
  )
};

export default PhysicalStressItems;
