import React from 'react';

const MentalStressItems = ({mental}) => {
  console.log(mental);
  return (
    <div>
      {mental[0]}
      {mental[1]}
    </div>
  )
};

export default MentalStressItems;
