import React from 'react';

import MentalStressItems from './stress_components/mental_item';
import PhysicalStressItems from './stress_components/physical_item';

const StressList = ({myStress}) => {
  return (
    <div className="col-sm-8">
      <h4>Stress Categories</h4>
      <MentalStressItems className="col-sm-8" mental={myStress.mental}/>
      <PhysicalStressItems className="col-sm-8" physical={myStress.physical}/>
    </div>
  )
};

export default StressList;
