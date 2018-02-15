import React from 'react';

const MentalStressItems = ({mental}) => {
  return (
    <div>
      <p>Mental Stress</p>
      <div className='stress_box'>
        <p>{mental[0]}</p>
        <p>{mental[1]}</p>
      </div>
    </div>
  )
};

export default MentalStressItems;
