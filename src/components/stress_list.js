import React from 'react';

import MentalStressItems from './mental_item';

const StressList = ({myStress}) => {
  return (
    <div>
      <h4>Stress Categories</h4>
      <MentalStressItems mental={myStress.mental}/>
    </div>
  )
};

export default StressList;
