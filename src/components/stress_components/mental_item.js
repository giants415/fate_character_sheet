import React from 'react';

const MentalStressItems = ({mental}) => {
  return (
    <div className='stress_box'>
      <span>Mental Stress</span>
      <div>{mental[0]}</div>
      <div>{mental[1]}</div>
    </div>
  )
};

export default MentalStressItems;
