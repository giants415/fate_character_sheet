import React from 'react';

const AspectList = ({myAspects}) => {
  return (
    <div className="col-lg-6 aspect_list">
      <h3>Aspects</h3>
      <ul>
        <li>{myAspects[0]}</li>
        <li>{myAspects[1]}</li>
        <li>{myAspects[2]}</li>
        <li>{myAspects[3]}</li>
        <li>{myAspects[4]}</li>
      </ul>
    </div>
  )
};

export default AspectList;
