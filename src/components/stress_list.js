import React from 'react';

const StressList = ({myStress}) => {
  return (
    <div>
      <h4>Stress Categories</h4>
      <PhysicalStress physical={myStress.physical}/>
      <MentalStress mental={myStress.mental}/>
    </div>
  )
};

export default StressList;
