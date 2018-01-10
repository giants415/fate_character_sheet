import React from 'react';

const MentalStressItems = ({mental}) => {
  return (
    <div>
      <p>Mental Stress</p>
      {mental[0]}
      {mental[1]}
    </div>
  )
};

export default MentalStressItems;
