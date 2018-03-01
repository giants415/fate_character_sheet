import React from 'react';
import StressBoxList from '../stress_box_list';

const MentalStressItems = ({mental}) => {
  return (
    <div className='stress_box'>
      <span>Mental Stress</span>
      <StressBoxList />
    </div>
  )
};

export default MentalStressItems;
