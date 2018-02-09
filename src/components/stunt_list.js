import React from 'react';

const StuntList = ({myStunts}) => {
  return (
    <div className="col-lg-6">
      <p>Stunts</p>
      <p>{myStunts[0]}</p>
      <p>{myStunts[1]}</p>
    </div>
  )
};

export default StuntList;
