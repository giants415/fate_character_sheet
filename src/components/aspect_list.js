import React from 'react';

const AspectList = ({myAspects}) => {
  return (
    <div>
      <h4>Aspects</h4>
      <p>{myAspects[0]}</p>
      <p>{myAspects[1]}</p>
      <p>{myAspects[2]}</p>
      <p>{myAspects[3]}</p>
      <p>{myAspects[4]}</p>
    </div>
  )
};

export default AspectList;
