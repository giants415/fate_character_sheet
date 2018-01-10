import React from 'react';

const StressList = ({myStress}) => {
  return (
    <div>
      <PhysicalStress physical={myStress.physical}/>
      <MentalStress mental={myStress.mental}/>
    </div>
  )
};

export default StressList;
