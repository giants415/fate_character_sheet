import React from 'react';

const AspectList = ({myAspects}) => {
  return (
    <table className="col-lg-6 table table-hover">
      <thead><tr><th>Aspects</th></tr></thead>
      <tbody>
        <tr><td>{myAspects[0]}</td></tr>
        <tr><td>{myAspects[1]}</td></tr>
        <tr><td>{myAspects[2]}</td></tr>
        <tr><td>{myAspects[3]}</td></tr>
        <tr><td>{myAspects[4]}</td></tr>
      </tbody>
    </table>
  )
};

export default AspectList;
