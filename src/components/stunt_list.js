import React from 'react';

const StuntList = ({myStunts}) => {
  return (
    <div>
      <h4>Stunts</h4>
      <p>{myStunts[0]}</p>
      <p>{myStunts[1]}</p>
    </div>
  )
};

export default StuntList;
