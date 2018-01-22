import React from 'react';

import MentalStressItems from './stress_components/mental_item';
import PhysicalStressItems from './stress_components/physical_item';

const noGutters = {
    paddingRight: '0',
    paddingLeft: '0'
};

const StressList = ({myStress}) => {
  return (
    <div className="col-sm-8" style={noGutters}>
      <h4>Stress Categories</h4>
      <MentalStressItems className="col-sm-8" mental={myStress.mental}/>
      <PhysicalStressItems className="col-sm-8" physical={myStress.physical}/>
    </div>
  )
};

export default StressList;
