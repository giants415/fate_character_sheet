import React from 'react';

const MentalStressItems = ({mental}) => {
  return (
    <div className='stress_box'>
      <h6>Mental Stress</h6>
      <p>{mental[0]}</p>
      <p>{mental[1]}</p>
    </div>
  )
};

export default MentalStressItems;
