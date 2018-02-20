import React from 'react';
import StressBox from './stress_box';

const MentalStressItems = ({mental}) => {
  return (
    <div className='stress_box'>
      <span>Mental Stress</span>
      <StressBox />
    </div>
  )
};

export default MentalStressItems;
