import React from 'react';

const pStyle = {
  margin: '0px'
}

const StuntList = ({myStunts}) => {
  return (
    <div className="col-lg-6">
      <p style={pStyle}>Stunts</p>
      <p>{myStunts[0]}</p>
      <p>{myStunts[1]}</p>
    </div>
  )
};

export default StuntList;
