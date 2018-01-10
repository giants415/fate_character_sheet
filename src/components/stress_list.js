import React from 'react';

import MentalStressItems from './stress_components/mental_item';
import PhysicalStressItems from './stress_components/physical_item';

const StressList = ({myStress}) => {
  return (
    <div>
      <h4>Stress Categories</h4>
      <MentalStressItems mental={myStress.mental}/>
      <PhysicalStressItems physical={myStress.physical}/>
    </div>
  )
};

export default StressList;
