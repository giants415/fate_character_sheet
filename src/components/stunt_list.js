import React from 'react';

const StuntList = ({myStunts}) => {
  return (
    <div className="col-lg-6">
      <h3>Stunts</h3>
      <p>{myStunts[0]}</p>
      <p>{myStunts[1]}</p>
    </div>
  )
};

export default StuntList;
