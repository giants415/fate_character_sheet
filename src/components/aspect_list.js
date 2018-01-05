import React from 'react';

const AspectList = ({myAspect}) => {
  console.log(myAspect);
  return (
    <div>
      <p>{myAspect[0]}</p>
      <p>{myAspect[1]}</p>
      <p>{myAspect[2]}</p>
      <p>{myAspect[3]}</p>
      <p>{myAspect[4]}</p>
    </div>
  )
};

export default AspectList;
